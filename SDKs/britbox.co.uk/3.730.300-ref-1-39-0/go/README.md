# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/britbox.co.uk/3.730.300-ref-1-39-0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AddPaymentMethod(ctx, operations.AddPaymentMethodRequest{
        AddPaymentMethodRequest: shared.AddPaymentMethodRequest{
            MakeDefault: sdk.Bool(false),
            Token: "corrupti",
            Type: shared.AddPaymentMethodRequestTypeEnumCard,
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
        },
        Lang: sdk.String("nulla"),
    }, operations.AddPaymentMethodSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [AddPaymentMethod](docs/account/README.md#addpaymentmethod) - Add a new payment method to an account.
* [AuthorizeDevice](docs/account/README.md#authorizedevice) - Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [CancelSubscription](docs/account/README.md#cancelsubscription) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [ChangePassword](docs/account/README.md#changepassword) - Change the password of an account.

The expected token scope is Settings.

* [ChangePin](docs/account/README.md#changepin) - Change the pin of an account.
* [CreateProfile](docs/account/README.md#createprofile) - Create a new profile under the active account.
* [DeleteProfileWithID](docs/account/README.md#deleteprofilewithid) - Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.

* [DeregisterDevice](docs/account/README.md#deregisterdevice) - Deregister a playback device from an account.
* [GenerateNonce](docs/account/README.md#generatenonce) - Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.

* [GetAccount](docs/account/README.md#getaccount) - Get the details of an account along with the profiles and entitlements under it.
* [GetDevice](docs/account/README.md#getdevice) - Get a registered device.
* [GetDevices](docs/account/README.md#getdevices) - Get all devices registered under this account.

Also includes information around device registration and deregistration limits.

* [GetEntitlements](docs/account/README.md#getentitlements) - Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.

* [GetItemMediaFiles](docs/account/README.md#getitemmediafiles) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetItemMediaFilesGuarded](docs/account/README.md#getitemmediafilesguarded) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetPaymentMethod](docs/account/README.md#getpaymentmethod) - Get a payment method under an account.
* [GetPaymentMethods](docs/account/README.md#getpaymentmethods) - Get the available payment methods under an account.
* [GetProfileWithID](docs/account/README.md#getprofilewithid) - Get the summary of a profile with a specific id under the active account.
* [GetPurchases](docs/account/README.md#getpurchases) - Get a list of all purchases made under an account.
* [MakePurchase](docs/account/README.md#makepurchase) - Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.

* [RegisterDevice](docs/account/README.md#registerdevice) - Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.

* [RemovePaymentMethod](docs/account/README.md#removepaymentmethod) - Remove a payment method from an account.
* [RenameDevice](docs/account/README.md#renamedevice) - Rename a device
* [RequestEmailVerification](docs/account/README.md#requestemailverification) - Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.

* [UpdateAccount](docs/account/README.md#updateaccount) - Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.

* [UpdateProfileWithID](docs/account/README.md#updateprofilewithid) - Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.

* [UpdateSubscription](docs/account/README.md#updatesubscription) - Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


### [App](docs/app/README.md)

* [GetAppConfig](docs/app/README.md#getappconfig) - Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.

* [GetItvPage](docs/app/README.md#getitvpage) - Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.

* [GetPage](docs/app/README.md#getpage) - Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.


### [Authorization](docs/authorization/README.md)

* [GenerateDeviceAuthorizationCode](docs/authorization/README.md#generatedeviceauthorizationcode) - Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [GetAccountToken](docs/authorization/README.md#getaccounttoken) - Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.

* [GetAccountTokenByCode](docs/authorization/README.md#getaccounttokenbycode) - Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.

* [GetProfileToken](docs/authorization/README.md#getprofiletoken) - Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.

* [RefreshToken](docs/authorization/README.md#refreshtoken) - Refresh an account or profile level authorization token which is marked as refreshable.
* [SignOut](docs/authorization/README.md#signout) - When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.

* [SingleSignOn](docs/authorization/README.md#singlesignon) - Exchange a third party single-sign-on token for our own authorization tokens.

### [Bt](docs/bt/README.md)

* [AssignToken](docs/bt/README.md#assigntoken) - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
* [CheckEeBtEligibility](docs/bt/README.md#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [CheckUserToken](docs/bt/README.md#checkusertoken) - Checks a provided token for BT eligible user.

* [GetPlanByToken](docs/bt/README.md#getplanbytoken) - Returns all the plans available for BT flow including additional description data.
* [GetPlans](docs/bt/README.md#getplans) - Returns all the plans available for BT flow including additional description data.

### [Content](docs/content/README.md)

* [GetAnonNextPlaybackItem](docs/content/README.md#getanonnextplaybackitem) - Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation

* [GetItem](docs/content/README.md#getitem) - Returns the details of an item with the specified id.
* [GetItemChildrenList](docs/content/README.md#getitemchildrenlist) - Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.

* [GetItemDownloadables](docs/content/README.md#getitemdownloadables) - Returns the details of an item with the specified id.
* [GetItemRelatedList](docs/content/README.md#getitemrelatedlist) - Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.

* [GetItemsMediaClipFiles](docs/content/README.md#getitemsmediaclipfiles) - Get the media clip files associated with items.

* [GetList](docs/content/README.md#getlist) - Returns a list of items under the specified item list
* [GetLists](docs/content/README.md#getlists) - Returns an array of item lists with their first page of content resolved.
* [GetPublicItemMediaFiles](docs/content/README.md#getpublicitemmediafiles) - Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetSchedules](docs/content/README.md#getschedules) - Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.

* [GetPlansID](docs/content/README.md#getplansid) - Returns the details of a Plan with the specified id.
* [Search](docs/content/README.md#search) - Search the catalog of items and people.

### [Ee](docs/ee/README.md)

* [AssignMsisdn](docs/ee/README.md#assignmsisdn) - Assigns a msisdn to a profile on ITV side.
* [CheckEeBtEligibility](docs/ee/README.md#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [CreatePinRequest](docs/ee/README.md#createpinrequest) - Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.

* [CreateToken](docs/ee/README.md#createtoken) - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
* [GetEligibleOffers](docs/ee/README.md#geteligibleoffers) - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.

* [GetPlan](docs/ee/README.md#getplan) - Returns the plan description for EE flow including additional description data.
* [GetEePlans](docs/ee/README.md#geteeplans) - Returns all the plans available for EE flow including additional description data.
* [ValidatePinRequest](docs/ee/README.md#validatepinrequest) - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

### [Itv](docs/itv/README.md)

* [ActivateSaveOffer](docs/itv/README.md#activatesaveoffer) - Activates the discount for a user. Only Stripe platform is currently supported.
* [ChangeCardDetails](docs/itv/README.md#changecarddetails) - Change payment card details.
* [ChangeEmail](docs/itv/README.md#changeemail) - Change email address related to account/profile.

The expected token scope is Settings.

* [ChangeMarketing](docs/itv/README.md#changemarketing) - Change marketing preferences related to account/profile.

The expected token scope is Settings.

* [CheckPreviousEntitlements](docs/itv/README.md#checkpreviousentitlements) - Check whether the user has been previously entitled.
* [CheckVoucher](docs/itv/README.md#checkvoucher) - Validates the coupon/voucher for specified payment platform.
* [ConfirmPurchase](docs/itv/README.md#confirmpurchase) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [ConfirmPurchaseStrong](docs/itv/README.md#confirmpurchasestrong) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [ConfirmPurchaseWithOffer](docs/itv/README.md#confirmpurchasewithoffer) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [DeleteAccount](docs/itv/README.md#deleteaccount) - Delete account in compliance with GDPR.

The expected token scope is Settings.

* [DeleteItvPurchasePlatform](docs/itv/README.md#deleteitvpurchaseplatform) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [ExecuteTransaction](docs/itv/README.md#executetransaction) - Sends request to execute specified transaction.
* [GetAccountTokenWithPin](docs/itv/README.md#getaccounttokenwithpin) - Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string

* [GetBillingHistory](docs/itv/README.md#getbillinghistory) - Returns the list of billing records for specified payment platform.
* [GetCardDetails](docs/itv/README.md#getcarddetails) - Get payment card details.
* [GetCurrentEntitlement](docs/itv/README.md#getcurrententitlement) - Returns current entitlement.
* [GetCurrentSubscription](docs/itv/README.md#getcurrentsubscription) - Returns the details of current subscription for specified payment platform.
* [GetEntitlementsHistory](docs/itv/README.md#getentitlementshistory) - Returns the state of subscription for any payment platform.
* [GetFeatureFlag](docs/itv/README.md#getfeatureflag) - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
* [GetFullPriceRenewal](docs/itv/README.md#getfullpricerenewal) - Returns full price renewal state and reason for specific user.
* [GetItvProfileToken](docs/itv/README.md#getitvprofiletoken) - Returns the ITV profile token.
* [GetPublicPreview](docs/itv/README.md#getpublicpreview) - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.

* [GetRecommendedList](docs/itv/README.md#getrecommendedlist) - Get the list of recommended items under the active profile.
* [GetSaveOffer](docs/itv/README.md#getsaveoffer) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [GetSubscriptionState](docs/itv/README.md#getsubscriptionstate) - Returns the state of subscription for any payment platform.
* [GetSubscriptionStatus](docs/itv/README.md#getsubscriptionstatus) - Returns status of latest payment intent.
* [GetUpcomingInvoice](docs/itv/README.md#getupcominginvoice) - Returns an upcoming invoice
* [GetVoucherByID](docs/itv/README.md#getvoucherbyid) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [GetItvItemsummaryExternalID](docs/itv/README.md#getitvitemsummaryexternalid) - Redirects to corresponding Axis Item details page.
* [GetItvPlansPlatform](docs/itv/README.md#getitvplansplatform) - Returns the plans available for specified payment platform.
* [GetItvProfile](docs/itv/README.md#getitvprofile) - Returns the ITV profile object.
* [GetItvRokuPlans](docs/itv/README.md#getitvrokuplans) - Gets available Roku plans.
* [GooglePaySubscription](docs/itv/README.md#googlepaysubscription) - Get the list of recommended items under the active profile.
* [Resubscribe](docs/itv/README.md#resubscribe) - Resubscription for a user.
* [UpdatePaymentIntentStrong](docs/itv/README.md#updatepaymentintentstrong) - Change payment method details.
* [UpdatePaymentMethodStrong](docs/itv/README.md#updatepaymentmethodstrong) - Change payment method details.
* [UpdateProfile](docs/itv/README.md#updateprofile) - Update ITV profile.

The expected token scope is Settings.

* [UpgradePlan](docs/itv/README.md#upgradeplan) - Upgrades the plan for the current user.

### [Profile](docs/profile/README.md)

* [BookmarkItem](docs/profile/README.md#bookmarkitem) - Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [DeleteItemBookmark](docs/profile/README.md#deleteitembookmark) - Unbookmark an item under the active profile.
* [DeleteWatched](docs/profile/README.md#deletewatched) - Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**

* [GetBookmarkList](docs/profile/README.md#getbookmarklist) - Returns the list of bookmarked items under the active profile.
* [GetBookmarks](docs/profile/README.md#getbookmarks) - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
* [GetContinueWatchingList](docs/profile/README.md#getcontinuewatchinglist) - Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.

* [GetItemBookmark](docs/profile/README.md#getitembookmark) - Get the bookmark for an item under the active profile.
* [GetItemRating](docs/profile/README.md#getitemrating) - Get the rating info for an item under the active profile.
* [GetItemWatchedStatus](docs/profile/README.md#getitemwatchedstatus) - Get the watched status info for an item under the active profile.
* [GetNextPlaybackItem](docs/profile/README.md#getnextplaybackitem) - Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.

* [GetProfile](docs/profile/README.md#getprofile) - Get the details of the active profile, including watched, bookmarked and rated items.
* [GetRatings](docs/profile/README.md#getratings) - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
* [GetRatingsList](docs/profile/README.md#getratingslist) - Returns the list of rated items under the active profile.
* [GetWatched](docs/profile/README.md#getwatched) - Get the map of watched item ids (itemId => last playhead position) under the active profile.
* [GetWatchedList](docs/profile/README.md#getwatchedlist) - Returns the list of watched items under the active profile.
* [RateItem](docs/profile/README.md#rateitem) - Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [SetItemWatchedStatus](docs/profile/README.md#setitemwatchedstatus) - Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


### [Registration](docs/registration/README.md)

* [Register](docs/registration/README.md#register) - Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


### [Support](docs/support/README.md)

* [ForgotPassword](docs/support/README.md#forgotpassword) - Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.

* [GetSubscriptionData](docs/support/README.md#getsubscriptiondata) - Returns the details of subscription data for a user with specified id.
* [ResetPassword](docs/support/README.md#resetpassword) - When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.

* [VerifyEmail](docs/support/README.md#verifyemail) - When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
