# SDK

## Overview

<p>Using the Amazon Cognito user pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito user pools.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html">Amazon Cognito Documentation</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-idp/>
### Available Operations

* [addCustomAttributes](#addcustomattributes) - Adds additional user attributes to the user pool schema.
* [adminAddUserToGroup](#adminaddusertogroup) - <p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [adminConfirmSignUp](#adminconfirmsignup) - <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [adminCreateUser](#admincreateuser) - <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>
* [adminDeleteUser](#admindeleteuser) - <p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [adminDeleteUserAttributes](#admindeleteuserattributes) - <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [adminDisableProviderForUser](#admindisableproviderforuser) - <p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
* [adminDisableUser](#admindisableuser) - <p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>
* [adminEnableUser](#adminenableuser) - <p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [adminForgetDevice](#adminforgetdevice) - <p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [adminGetDevice](#admingetdevice) - <p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [adminGetUser](#admingetuser) - <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [adminInitiateAuth](#admininitiateauth) - <p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [adminLinkProviderForUser](#adminlinkproviderforuser) - <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is administrative and requires developer credentials.</p>
* [adminListDevices](#adminlistdevices) - <p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [adminListGroupsForUser](#adminlistgroupsforuser) - <p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>
* [adminListUserAuthEvents](#adminlistuserauthevents) - A history of user activity and any risks detected as part of Amazon Cognito advanced security.
* [adminRemoveUserFromGroup](#adminremoveuserfromgroup) - <p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [adminResetUserPassword](#adminresetuserpassword) - <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [adminRespondToAuthChallenge](#adminrespondtoauthchallenge) - <p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [adminSetUserMFAPreference](#adminsetusermfapreference) - The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.
* [adminSetUserPassword](#adminsetuserpassword) - <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p>
* [adminSetUserSettings](#adminsetusersettings) -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.
* [adminUpdateAuthEventFeedback](#adminupdateautheventfeedback) - Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
* [adminUpdateDeviceStatus](#adminupdatedevicestatus) - <p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [adminUpdateUserAttributes](#adminupdateuserattributes) - <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [adminUserGlobalSignOut](#adminuserglobalsignout) - <p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. The user's current access and ID tokens remain valid until they expire. By default, access and ID tokens expire one hour after they're issued. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.</p> <p>Calling this action requires developer credentials.</p>
* [associateSoftwareToken](#associatesoftwaretoken) - <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note>
* [changePassword](#changepassword) - Changes the password for a specified user in a user pool.
* [confirmDevice](#confirmdevice) - Confirms tracking of the device. This API call is the call that begins device tracking.
* [confirmForgotPassword](#confirmforgotpassword) - Allows a user to enter a confirmation code to reset a forgotten password.
* [confirmSignUp](#confirmsignup) - Confirms registration of a new user.
* [createGroup](#creategroup) - <p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>
* [createIdentityProvider](#createidentityprovider) - Creates an IdP for a user pool.
* [createResourceServer](#createresourceserver) - Creates a new OAuth2.0 resource server and defines custom scopes within it.
* [createUserImportJob](#createuserimportjob) - Creates the user import job.
* [createUserPool](#createuserpool) - <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [createUserPoolClient](#createuserpoolclient) - <p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
* [createUserPoolDomain](#createuserpooldomain) - Creates a new domain for a user pool.
* [deleteGroup](#deletegroup) - <p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>
* [deleteIdentityProvider](#deleteidentityprovider) - Deletes an IdP for a user pool.
* [deleteResourceServer](#deleteresourceserver) - Deletes a resource server.
* [deleteUser](#deleteuser) - Allows a user to delete himself or herself.
* [deleteUserAttributes](#deleteuserattributes) - Deletes the attributes for a user.
* [deleteUserPool](#deleteuserpool) - Deletes the specified Amazon Cognito user pool.
* [deleteUserPoolClient](#deleteuserpoolclient) - Allows the developer to delete the user pool client.
* [deleteUserPoolDomain](#deleteuserpooldomain) - Deletes a domain for a user pool.
* [describeIdentityProvider](#describeidentityprovider) - Gets information about a specific IdP.
* [describeResourceServer](#describeresourceserver) - Describes a resource server.
* [describeRiskConfiguration](#describeriskconfiguration) - Describes the risk configuration.
* [describeUserImportJob](#describeuserimportjob) - Describes the user import job.
* [describeUserPool](#describeuserpool) - Returns the configuration information and metadata of the specified user pool.
* [describeUserPoolClient](#describeuserpoolclient) - Client method for returning the configuration information and metadata of the specified user pool app client.
* [describeUserPoolDomain](#describeuserpooldomain) - Gets information about a domain.
* [forgetDevice](#forgetdevice) - Forgets the specified device.
* [forgotPassword](#forgotpassword) - <p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [getCSVHeader](#getcsvheader) - Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.
* [getDevice](#getdevice) - Gets the device.
* [getGroup](#getgroup) - <p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>
* [getIdentityProviderByIdentifier](#getidentityproviderbyidentifier) - Gets the specified IdP.
* [getSigningCertificate](#getsigningcertificate) - <p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>
* [getUICustomization](#getuicustomization) - Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.
* [getUser](#getuser) - Gets the user attributes and metadata for a user.
* [getUserAttributeVerificationCode](#getuserattributeverificationcode) - <p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [getUserPoolMfaConfig](#getuserpoolmfaconfig) - Gets the user pool multi-factor authentication (MFA) configuration.
* [globalSignOut](#globalsignout) - Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.
* [initiateAuth](#initiateauth) - <p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [listDevices](#listdevices) - Lists the sign-in devices that Amazon Cognito has registered to the current user.
* [listGroups](#listgroups) - <p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>
* [listIdentityProviders](#listidentityproviders) - Lists information about all IdPs for a user pool.
* [listResourceServers](#listresourceservers) - Lists the resource servers for a user pool.
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
* [listUserImportJobs](#listuserimportjobs) - Lists the user import jobs.
* [listUserPoolClients](#listuserpoolclients) - Lists the clients that have been created for the specified user pool.
* [listUserPools](#listuserpools) - Lists the user pools associated with an Amazon Web Services account.
* [listUsers](#listusers) - Lists the users in the Amazon Cognito user pool.
* [listUsersInGroup](#listusersingroup) - <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [resendConfirmationCode](#resendconfirmationcode) - <p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [respondToAuthChallenge](#respondtoauthchallenge) - <p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [revokeToken](#revoketoken) - Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.
* [setRiskConfiguration](#setriskconfiguration) - <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
* [setUICustomization](#setuicustomization) - <p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
* [setUserMFAPreference](#setusermfapreference) - Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.
* [setUserPoolMfaConfig](#setuserpoolmfaconfig) - <p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [setUserSettings](#setusersettings) -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.
* [signUp](#signup) - <p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [startUserImportJob](#startuserimportjob) - Starts the user import.
* [stopUserImportJob](#stopuserimportjob) - Stops the user import job.
* [tagResource](#tagresource) - <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
* [untagResource](#untagresource) - Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.
* [updateAuthEventFeedback](#updateautheventfeedback) - Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
* [updateDeviceStatus](#updatedevicestatus) - Updates the device status.
* [updateGroup](#updategroup) - <p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>
* [updateIdentityProvider](#updateidentityprovider) - Updates IdP information for a user pool.
* [updateResourceServer](#updateresourceserver) - <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important>
* [updateUserAttributes](#updateuserattributes) - <p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [updateUserPool](#updateuserpool) - <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [updateUserPoolClient](#updateuserpoolclient) - <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
* [updateUserPoolDomain](#updateuserpooldomain) - <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
* [verifySoftwareToken](#verifysoftwaretoken) - Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
* [verifyUserAttribute](#verifyuserattribute) - <p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p>

## addCustomAttributes

Adds additional user attributes to the user pool schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomAttributesRequest;
import org.openapis.openapi.models.operations.AddCustomAttributesResponse;
import org.openapis.openapi.models.operations.AddCustomAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddCustomAttributesRequest;
import org.openapis.openapi.models.shared.AttributeDataTypeEnum;
import org.openapis.openapi.models.shared.NumberAttributeConstraintsType;
import org.openapis.openapi.models.shared.SchemaAttributeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringAttributeConstraintsType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomAttributesRequest req = new AddCustomAttributesRequest(                new AddCustomAttributesRequest(                new org.openapis.openapi.models.shared.SchemaAttributeType[]{{
                                                add(new SchemaAttributeType() {{
                                                    attributeDataType = AttributeDataTypeEnum.BOOLEAN_;
                                                    developerOnlyAttribute = false;
                                                    mutable = false;
                                                    name = "Erik Lebsack";
                                                    numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                                        maxValue = "dicta";
                                                        minValue = "nam";
                                                    }};
                                                    required = false;
                                                    stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                                        maxLength = "officia";
                                                        minLength = "occaecati";
                                                    }};
                                                }}),
                                                add(new SchemaAttributeType() {{
                                                    attributeDataType = AttributeDataTypeEnum.STRING;
                                                    developerOnlyAttribute = false;
                                                    mutable = false;
                                                    name = "Irvin Rosenbaum III";
                                                    numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                                        maxValue = "molestiae";
                                                        minValue = "modi";
                                                    }};
                                                    required = false;
                                                    stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                                        maxLength = "qui";
                                                        minLength = "impedit";
                                                    }};
                                                }}),
                                            }}, "cum");, AddCustomAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADD_CUSTOM_ATTRIBUTES) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            AddCustomAttributesResponse res = sdk.sdk.addCustomAttributes(req);

            if (res.addCustomAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminAddUserToGroup

<p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminAddUserToGroupRequest;
import org.openapis.openapi.models.operations.AdminAddUserToGroupResponse;
import org.openapis.openapi.models.operations.AdminAddUserToGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminAddUserToGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminAddUserToGroupRequest req = new AdminAddUserToGroupRequest(                new AdminAddUserToGroupRequest("iste", "dolor", "natus");, AdminAddUserToGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_ADD_USER_TO_GROUP) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            AdminAddUserToGroupResponse res = sdk.sdk.adminAddUserToGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminConfirmSignUp

<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminConfirmSignUpRequest;
import org.openapis.openapi.models.operations.AdminConfirmSignUpResponse;
import org.openapis.openapi.models.operations.AdminConfirmSignUpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminConfirmSignUpRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminConfirmSignUpRequest req = new AdminConfirmSignUpRequest(                new AdminConfirmSignUpRequest("saepe", "quidem") {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "reiciendis");
                                }};
                            }};, AdminConfirmSignUpXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_CONFIRM_SIGN_UP) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            AdminConfirmSignUpResponse res = sdk.sdk.adminConfirmSignUp(req);

            if (res.adminConfirmSignUpResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCreateUser

<p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCreateUserRequest;
import org.openapis.openapi.models.operations.AdminCreateUserResponse;
import org.openapis.openapi.models.operations.AdminCreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminCreateUserRequest;
import org.openapis.openapi.models.shared.AttributeType;
import org.openapis.openapi.models.shared.DeliveryMediumTypeEnum;
import org.openapis.openapi.models.shared.MessageActionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminCreateUserRequest req = new AdminCreateUserRequest(                new AdminCreateUserRequest("enim", "omnis") {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("minima", "excepturi");
                                    put("accusantium", "iure");
                                }};
                                desiredDeliveryMediums = new org.openapis.openapi.models.shared.DeliveryMediumTypeEnum[]{{
                                    add(DeliveryMediumTypeEnum.EMAIL),
                                    add(DeliveryMediumTypeEnum.EMAIL),
                                    add(DeliveryMediumTypeEnum.SMS),
                                }};
                                forceAliasCreation = false;
                                messageAction = MessageActionTypeEnum.SUPPRESS;
                                temporaryPassword = "dolorem";
                                userAttributes = new org.openapis.openapi.models.shared.AttributeType[]{{
                                    add(new AttributeType("quam") {{
                                        name = "Jaime O'Hara";
                                        value = "commodi";
                                    }}),
                                    add(new AttributeType("laborum") {{
                                        name = "Shannon Mueller";
                                        value = "vitae";
                                    }}),
                                    add(new AttributeType("ipsam") {{
                                        name = "Bill Conn";
                                        value = "tenetur";
                                    }}),
                                }};
                                validationData = new org.openapis.openapi.models.shared.AttributeType[]{{
                                    add(new AttributeType("quasi") {{
                                        name = "Richard Boyer";
                                        value = "laborum";
                                    }}),
                                    add(new AttributeType("ipsa") {{
                                        name = "Jan Thiel";
                                        value = "voluptatibus";
                                    }}),
                                    add(new AttributeType("maiores") {{
                                        name = "Mr. Jared Ritchie";
                                        value = "ut";
                                    }}),
                                }};
                            }};, AdminCreateUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_CREATE_USER) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            AdminCreateUserResponse res = sdk.sdk.adminCreateUser(req);

            if (res.adminCreateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteUser

<p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteUserRequest;
import org.openapis.openapi.models.operations.AdminDeleteUserResponse;
import org.openapis.openapi.models.operations.AdminDeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminDeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteUserRequest req = new AdminDeleteUserRequest(                new AdminDeleteUserRequest("commodi", "repudiandae");, AdminDeleteUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DELETE_USER) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            AdminDeleteUserResponse res = sdk.sdk.adminDeleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDeleteUserAttributes

<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDeleteUserAttributesRequest;
import org.openapis.openapi.models.operations.AdminDeleteUserAttributesResponse;
import org.openapis.openapi.models.operations.AdminDeleteUserAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminDeleteUserAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDeleteUserAttributesRequest req = new AdminDeleteUserAttributesRequest(                new AdminDeleteUserAttributesRequest(                new String[]{{
                                                add("voluptates"),
                                                add("quasi"),
                                                add("repudiandae"),
                                            }}, "sint", "veritatis");, AdminDeleteUserAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DELETE_USER_ATTRIBUTES) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            AdminDeleteUserAttributesResponse res = sdk.sdk.adminDeleteUserAttributes(req);

            if (res.adminDeleteUserAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDisableProviderForUser

<p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDisableProviderForUserRequest;
import org.openapis.openapi.models.operations.AdminDisableProviderForUserResponse;
import org.openapis.openapi.models.operations.AdminDisableProviderForUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminDisableProviderForUserRequest;
import org.openapis.openapi.models.shared.ProviderUserIdentifierType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDisableProviderForUserRequest req = new AdminDisableProviderForUserRequest(                new AdminDisableProviderForUserRequest(                new ProviderUserIdentifierType() {{
                                                providerAttributeName = "distinctio";
                                                providerAttributeValue = "quibusdam";
                                                providerName = "labore";
                                            }};, "modi");, AdminDisableProviderForUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DISABLE_PROVIDER_FOR_USER) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "cupiditate";
                xAmzDate = "quos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "assumenda";
            }};            

            AdminDisableProviderForUserResponse res = sdk.sdk.adminDisableProviderForUser(req);

            if (res.adminDisableProviderForUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminDisableUser

<p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminDisableUserRequest;
import org.openapis.openapi.models.operations.AdminDisableUserResponse;
import org.openapis.openapi.models.operations.AdminDisableUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminDisableUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminDisableUserRequest req = new AdminDisableUserRequest(                new AdminDisableUserRequest("alias", "fugit");, AdminDisableUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DISABLE_USER) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            AdminDisableUserResponse res = sdk.sdk.adminDisableUser(req);

            if (res.adminDisableUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminEnableUser

<p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminEnableUserRequest;
import org.openapis.openapi.models.operations.AdminEnableUserResponse;
import org.openapis.openapi.models.operations.AdminEnableUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminEnableUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminEnableUserRequest req = new AdminEnableUserRequest(                new AdminEnableUserRequest("non", "eligendi");, AdminEnableUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_ENABLE_USER) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            AdminEnableUserResponse res = sdk.sdk.adminEnableUser(req);

            if (res.adminEnableUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminForgetDevice

<p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminForgetDeviceRequest;
import org.openapis.openapi.models.operations.AdminForgetDeviceResponse;
import org.openapis.openapi.models.operations.AdminForgetDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminForgetDeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminForgetDeviceRequest req = new AdminForgetDeviceRequest(                new AdminForgetDeviceRequest("a", "dolorum", "in");, AdminForgetDeviceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_FORGET_DEVICE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            AdminForgetDeviceResponse res = sdk.sdk.adminForgetDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminGetDevice

<p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminGetDeviceRequest;
import org.openapis.openapi.models.operations.AdminGetDeviceResponse;
import org.openapis.openapi.models.operations.AdminGetDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminGetDeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminGetDeviceRequest req = new AdminGetDeviceRequest(                new AdminGetDeviceRequest("ea", "aliquid", "laborum");, AdminGetDeviceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_GET_DEVICE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            AdminGetDeviceResponse res = sdk.sdk.adminGetDevice(req);

            if (res.adminGetDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminGetUser

<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminGetUserRequest;
import org.openapis.openapi.models.operations.AdminGetUserResponse;
import org.openapis.openapi.models.operations.AdminGetUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminGetUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminGetUserRequest req = new AdminGetUserRequest(                new AdminGetUserRequest("nam", "id");, AdminGetUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_GET_USER) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            AdminGetUserResponse res = sdk.sdk.adminGetUser(req);

            if (res.adminGetUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminInitiateAuth

<p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminInitiateAuthRequest;
import org.openapis.openapi.models.operations.AdminInitiateAuthResponse;
import org.openapis.openapi.models.operations.AdminInitiateAuthXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminInitiateAuthRequest;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.AuthFlowTypeEnum;
import org.openapis.openapi.models.shared.ContextDataType;
import org.openapis.openapi.models.shared.HttpHeader;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminInitiateAuthRequest req = new AdminInitiateAuthRequest(                new AdminInitiateAuthRequest(AuthFlowTypeEnum.ADMIN_NO_SRP_AUTH, "molestiae", "perferendis") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "nihil";
                                }};;
                                authParameters = new java.util.HashMap<String, String>() {{
                                    put("distinctio", "id");
                                    put("labore", "labore");
                                }};
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("natus", "nobis");
                                    put("eum", "vero");
                                }};
                                contextData = new ContextDataType(                new org.openapis.openapi.models.shared.HttpHeader[]{{
                                                    add(new HttpHeader() {{
                                                        headerName = "architecto";
                                                        headerValue = "magnam";
                                                    }}),
                                                }}, "et", "excepturi", "ullam") {{
                                    encodedData = "provident";
                                }};;
                            }};, AdminInitiateAuthXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_INITIATE_AUTH) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusantium";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ad";
            }};            

            AdminInitiateAuthResponse res = sdk.sdk.adminInitiateAuth(req);

            if (res.adminInitiateAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminLinkProviderForUser

<p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is administrative and requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminLinkProviderForUserRequest;
import org.openapis.openapi.models.operations.AdminLinkProviderForUserResponse;
import org.openapis.openapi.models.operations.AdminLinkProviderForUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminLinkProviderForUserRequest;
import org.openapis.openapi.models.shared.ProviderUserIdentifierType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminLinkProviderForUserRequest req = new AdminLinkProviderForUserRequest(                new AdminLinkProviderForUserRequest(                new ProviderUserIdentifierType() {{
                                                providerAttributeName = "dolor";
                                                providerAttributeValue = "necessitatibus";
                                                providerName = "odit";
                                            }};,                 new ProviderUserIdentifierType() {{
                                                providerAttributeName = "nemo";
                                                providerAttributeValue = "quasi";
                                                providerName = "iure";
                                            }};, "doloribus");, AdminLinkProviderForUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LINK_PROVIDER_FOR_USER) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            AdminLinkProviderForUserResponse res = sdk.sdk.adminLinkProviderForUser(req);

            if (res.adminLinkProviderForUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminListDevices

<p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminListDevicesRequest;
import org.openapis.openapi.models.operations.AdminListDevicesResponse;
import org.openapis.openapi.models.operations.AdminListDevicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminListDevicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminListDevicesRequest req = new AdminListDevicesRequest(                new AdminListDevicesRequest("repudiandae", "ullam") {{
                                limit = 714242L;
                                paginationToken = "nihil";
                            }};, AdminListDevicesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_DEVICES) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            AdminListDevicesResponse res = sdk.sdk.adminListDevices(req);

            if (res.adminListDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminListGroupsForUser

<p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminListGroupsForUserRequest;
import org.openapis.openapi.models.operations.AdminListGroupsForUserResponse;
import org.openapis.openapi.models.operations.AdminListGroupsForUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminListGroupsForUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminListGroupsForUserRequest req = new AdminListGroupsForUserRequest(                new AdminListGroupsForUserRequest("natus", "magni") {{
                                limit = 123820L;
                                nextToken = "quo";
                            }};, AdminListGroupsForUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_GROUPS_FOR_USER) {{
                limit = "illum";
                nextToken = "pariatur";
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
            }};            

            AdminListGroupsForUserResponse res = sdk.sdk.adminListGroupsForUser(req);

            if (res.adminListGroupsForUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminListUserAuthEvents

A history of user activity and any risks detected as part of Amazon Cognito advanced security.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminListUserAuthEventsRequest;
import org.openapis.openapi.models.operations.AdminListUserAuthEventsResponse;
import org.openapis.openapi.models.operations.AdminListUserAuthEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminListUserAuthEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminListUserAuthEventsRequest req = new AdminListUserAuthEventsRequest(                new AdminListUserAuthEventsRequest("quidem", "ipsam") {{
                                maxResults = 453543L;
                                nextToken = "autem";
                            }};, AdminListUserAuthEventsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_USER_AUTH_EVENTS) {{
                maxResults = "nam";
                nextToken = "eaque";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            AdminListUserAuthEventsResponse res = sdk.sdk.adminListUserAuthEvents(req);

            if (res.adminListUserAuthEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminRemoveUserFromGroup

<p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminRemoveUserFromGroupRequest;
import org.openapis.openapi.models.operations.AdminRemoveUserFromGroupResponse;
import org.openapis.openapi.models.operations.AdminRemoveUserFromGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminRemoveUserFromGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminRemoveUserFromGroupRequest req = new AdminRemoveUserFromGroupRequest(                new AdminRemoveUserFromGroupRequest("corporis", "hic", "libero");, AdminRemoveUserFromGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_REMOVE_USER_FROM_GROUP) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            AdminRemoveUserFromGroupResponse res = sdk.sdk.adminRemoveUserFromGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminResetUserPassword

<p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminResetUserPasswordRequest;
import org.openapis.openapi.models.operations.AdminResetUserPasswordResponse;
import org.openapis.openapi.models.operations.AdminResetUserPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminResetUserPasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminResetUserPasswordRequest req = new AdminResetUserPasswordRequest(                new AdminResetUserPasswordRequest("eos", "perferendis") {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("minus", "quam");
                                }};
                            }};, AdminResetUserPasswordXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_RESET_USER_PASSWORD) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            AdminResetUserPasswordResponse res = sdk.sdk.adminResetUserPassword(req);

            if (res.adminResetUserPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminRespondToAuthChallenge

<p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminRespondToAuthChallengeRequest;
import org.openapis.openapi.models.operations.AdminRespondToAuthChallengeResponse;
import org.openapis.openapi.models.operations.AdminRespondToAuthChallengeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminRespondToAuthChallengeRequest;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ChallengeNameTypeEnum;
import org.openapis.openapi.models.shared.ContextDataType;
import org.openapis.openapi.models.shared.HttpHeader;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminRespondToAuthChallengeRequest req = new AdminRespondToAuthChallengeRequest(                new AdminRespondToAuthChallengeRequest(ChallengeNameTypeEnum.SMS_MFA, "porro", "consequuntur") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "blanditiis";
                                }};;
                                challengeResponses = new java.util.HashMap<String, String>() {{
                                    put("eaque", "occaecati");
                                    put("rerum", "adipisci");
                                    put("asperiores", "earum");
                                }};
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("iste", "dolorum");
                                    put("deleniti", "pariatur");
                                }};
                                contextData = new ContextDataType(                new org.openapis.openapi.models.shared.HttpHeader[]{{
                                                    add(new HttpHeader() {{
                                                        headerName = "nobis";
                                                        headerValue = "libero";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        headerName = "delectus";
                                                        headerValue = "quaerat";
                                                    }}),
                                                    add(new HttpHeader() {{
                                                        headerName = "quos";
                                                        headerValue = "aliquid";
                                                    }}),
                                                }}, "dolorem", "dolorem", "dolor") {{
                                    encodedData = "qui";
                                }};;
                                session = "ipsum";
                            }};, AdminRespondToAuthChallengeXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_RESPOND_TO_AUTH_CHALLENGE) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            AdminRespondToAuthChallengeResponse res = sdk.sdk.adminRespondToAuthChallenge(req);

            if (res.adminRespondToAuthChallengeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminSetUserMFAPreference

The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminSetUserMFAPreferenceRequest;
import org.openapis.openapi.models.operations.AdminSetUserMFAPreferenceResponse;
import org.openapis.openapi.models.operations.AdminSetUserMFAPreferenceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminSetUserMFAPreferenceRequest;
import org.openapis.openapi.models.shared.SMSMfaSettingsType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SoftwareTokenMfaSettingsType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminSetUserMFAPreferenceRequest req = new AdminSetUserMFAPreferenceRequest(                new AdminSetUserMFAPreferenceRequest("numquam", "veritatis") {{
                                smsMfaSettings = new SMSMfaSettingsType() {{
                                    enabled = false;
                                    preferredMfa = false;
                                }};;
                                softwareTokenMfaSettings = new SoftwareTokenMfaSettingsType() {{
                                    enabled = false;
                                    preferredMfa = false;
                                }};;
                            }};, AdminSetUserMFAPreferenceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_MFA_PREFERENCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            AdminSetUserMFAPreferenceResponse res = sdk.sdk.adminSetUserMFAPreference(req);

            if (res.adminSetUserMFAPreferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminSetUserPassword

<p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminSetUserPasswordRequest;
import org.openapis.openapi.models.operations.AdminSetUserPasswordResponse;
import org.openapis.openapi.models.operations.AdminSetUserPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminSetUserPasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminSetUserPasswordRequest req = new AdminSetUserPasswordRequest(                new AdminSetUserPasswordRequest("voluptas", "natus", "eos") {{
                                permanent = false;
                            }};, AdminSetUserPasswordXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_PASSWORD) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            AdminSetUserPasswordResponse res = sdk.sdk.adminSetUserPassword(req);

            if (res.adminSetUserPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminSetUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminSetUserSettingsRequest;
import org.openapis.openapi.models.operations.AdminSetUserSettingsResponse;
import org.openapis.openapi.models.operations.AdminSetUserSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminSetUserSettingsRequest;
import org.openapis.openapi.models.shared.DeliveryMediumTypeEnum;
import org.openapis.openapi.models.shared.MFAOptionType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminSetUserSettingsRequest req = new AdminSetUserSettingsRequest(                new AdminSetUserSettingsRequest(                new org.openapis.openapi.models.shared.MFAOptionType[]{{
                                                add(new MFAOptionType() {{
                                                    attributeName = "deleniti";
                                                    deliveryMedium = DeliveryMediumTypeEnum.EMAIL;
                                                }}),
                                                add(new MFAOptionType() {{
                                                    attributeName = "necessitatibus";
                                                    deliveryMedium = DeliveryMediumTypeEnum.EMAIL;
                                                }}),
                                                add(new MFAOptionType() {{
                                                    attributeName = "asperiores";
                                                    deliveryMedium = DeliveryMediumTypeEnum.SMS;
                                                }}),
                                            }}, "ipsum", "voluptate");, AdminSetUserSettingsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_SETTINGS) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
            }};            

            AdminSetUserSettingsResponse res = sdk.sdk.adminSetUserSettings(req);

            if (res.adminSetUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminUpdateAuthEventFeedback

Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminUpdateAuthEventFeedbackRequest;
import org.openapis.openapi.models.operations.AdminUpdateAuthEventFeedbackResponse;
import org.openapis.openapi.models.operations.AdminUpdateAuthEventFeedbackXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminUpdateAuthEventFeedbackRequest;
import org.openapis.openapi.models.shared.FeedbackValueTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminUpdateAuthEventFeedbackRequest req = new AdminUpdateAuthEventFeedbackRequest(                new AdminUpdateAuthEventFeedbackRequest("ad", FeedbackValueTypeEnum.INVALID, "suscipit", "deserunt");, AdminUpdateAuthEventFeedbackXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_AUTH_EVENT_FEEDBACK) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "minima";
                xAmzCredential = "repellendus";
                xAmzDate = "totam";
                xAmzSecurityToken = "similique";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "at";
            }};            

            AdminUpdateAuthEventFeedbackResponse res = sdk.sdk.adminUpdateAuthEventFeedback(req);

            if (res.adminUpdateAuthEventFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminUpdateDeviceStatus

<p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminUpdateDeviceStatusRequest;
import org.openapis.openapi.models.operations.AdminUpdateDeviceStatusResponse;
import org.openapis.openapi.models.operations.AdminUpdateDeviceStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminUpdateDeviceStatusRequest;
import org.openapis.openapi.models.shared.DeviceRememberedStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminUpdateDeviceStatusRequest req = new AdminUpdateDeviceStatusRequest(                new AdminUpdateDeviceStatusRequest("tempora", "vel", "quod") {{
                                deviceRememberedStatus = DeviceRememberedStatusTypeEnum.NOT_REMEMBERED;
                            }};, AdminUpdateDeviceStatusXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_DEVICE_STATUS) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "a";
                xAmzDate = "esse";
                xAmzSecurityToken = "harum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "ipsum";
            }};            

            AdminUpdateDeviceStatusResponse res = sdk.sdk.adminUpdateDeviceStatus(req);

            if (res.adminUpdateDeviceStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminUpdateUserAttributes

<p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminUpdateUserAttributesRequest;
import org.openapis.openapi.models.operations.AdminUpdateUserAttributesResponse;
import org.openapis.openapi.models.operations.AdminUpdateUserAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminUpdateUserAttributesRequest;
import org.openapis.openapi.models.shared.AttributeType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminUpdateUserAttributesRequest req = new AdminUpdateUserAttributesRequest(                new AdminUpdateUserAttributesRequest(                new org.openapis.openapi.models.shared.AttributeType[]{{
                                                add(new AttributeType("sapiente") {{
                                                    name = "Kelli Thompson";
                                                    value = "dolorem";
                                                }}),
                                                add(new AttributeType("vel") {{
                                                    name = "Christian Balistreri";
                                                    value = "sed";
                                                }}),
                                                add(new AttributeType("qui") {{
                                                    name = "Glen Oberbrunner";
                                                    value = "incidunt";
                                                }}),
                                                add(new AttributeType("incidunt") {{
                                                    name = "Simon Stracke MD";
                                                    value = "totam";
                                                }}),
                                            }}, "aspernatur", "dolores") {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("facilis", "aliquid");
                                    put("quam", "molestias");
                                    put("temporibus", "qui");
                                }};
                            }};, AdminUpdateUserAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_USER_ATTRIBUTES) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
            }};            

            AdminUpdateUserAttributesResponse res = sdk.sdk.adminUpdateUserAttributes(req);

            if (res.adminUpdateUserAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminUserGlobalSignOut

<p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. The user's current access and ID tokens remain valid until they expire. By default, access and ID tokens expire one hour after they're issued. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminUserGlobalSignOutRequest;
import org.openapis.openapi.models.operations.AdminUserGlobalSignOutResponse;
import org.openapis.openapi.models.operations.AdminUserGlobalSignOutXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdminUserGlobalSignOutRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdminUserGlobalSignOutRequest req = new AdminUserGlobalSignOutRequest(                new AdminUserGlobalSignOutRequest("voluptatem", "cumque");, AdminUserGlobalSignOutXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_USER_GLOBAL_SIGN_OUT) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            AdminUserGlobalSignOutResponse res = sdk.sdk.adminUserGlobalSignOut(req);

            if (res.adminUserGlobalSignOutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateSoftwareToken

<p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateSoftwareTokenRequest;
import org.openapis.openapi.models.operations.AssociateSoftwareTokenResponse;
import org.openapis.openapi.models.operations.AssociateSoftwareTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateSoftwareTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateSoftwareTokenRequest req = new AssociateSoftwareTokenRequest(                new AssociateSoftwareTokenRequest() {{
                                accessToken = "tempore";
                                session = "cupiditate";
                            }};, AssociateSoftwareTokenXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ASSOCIATE_SOFTWARE_TOKEN) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            AssociateSoftwareTokenResponse res = sdk.sdk.associateSoftwareToken(req);

            if (res.associateSoftwareTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePassword

Changes the password for a specified user in a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.operations.ChangePasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.ChangePasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(                new ChangePasswordRequest("quae", "aut", "quas");, ChangePasswordXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CHANGE_PASSWORD) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "porro";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ut";
            }};            

            ChangePasswordResponse res = sdk.sdk.changePassword(req);

            if (res.changePasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmDevice

Confirms tracking of the device. This API call is the call that begins device tracking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmDeviceRequest;
import org.openapis.openapi.models.operations.ConfirmDeviceResponse;
import org.openapis.openapi.models.operations.ConfirmDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmDeviceRequest;
import org.openapis.openapi.models.shared.DeviceSecretVerifierConfigType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmDeviceRequest req = new ConfirmDeviceRequest(                new ConfirmDeviceRequest("cupiditate", "qui") {{
                                deviceName = "quae";
                                deviceSecretVerifierConfig = new DeviceSecretVerifierConfigType() {{
                                    passwordVerifier = "laudantium";
                                    salt = "odio";
                                }};;
                            }};, ConfirmDeviceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_DEVICE) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quisquam";
                xAmzDate = "vero";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "ipsum";
            }};            

            ConfirmDeviceResponse res = sdk.sdk.confirmDevice(req);

            if (res.confirmDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmForgotPassword

Allows a user to enter a confirmation code to reset a forgotten password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmForgotPasswordRequest;
import org.openapis.openapi.models.operations.ConfirmForgotPasswordResponse;
import org.openapis.openapi.models.operations.ConfirmForgotPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ConfirmForgotPasswordRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmForgotPasswordRequest req = new ConfirmForgotPasswordRequest(                new ConfirmForgotPasswordRequest("voluptate", "consectetur", "vero", "tenetur") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "dignissimos";
                                }};;
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("distinctio", "quod");
                                    put("odio", "similique");
                                    put("facilis", "vero");
                                    put("ducimus", "dolore");
                                }};
                                secretHash = "quibusdam";
                                userContextData = new UserContextDataType() {{
                                    encodedData = "illum";
                                    ipAddress = "sequi";
                                }};;
                            }};, ConfirmForgotPasswordXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_FORGOT_PASSWORD) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            ConfirmForgotPasswordResponse res = sdk.sdk.confirmForgotPassword(req);

            if (res.confirmForgotPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmSignUp

Confirms registration of a new user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmSignUpRequest;
import org.openapis.openapi.models.operations.ConfirmSignUpResponse;
import org.openapis.openapi.models.operations.ConfirmSignUpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ConfirmSignUpRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmSignUpRequest req = new ConfirmSignUpRequest(                new ConfirmSignUpRequest("maiores", "doloribus", "iusto") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "eligendi";
                                }};;
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("alias", "officia");
                                    put("tempora", "ipsam");
                                }};
                                forceAliasCreation = false;
                                secretHash = "ea";
                                userContextData = new UserContextDataType() {{
                                    encodedData = "aspernatur";
                                    ipAddress = "vel";
                                }};;
                            }};, ConfirmSignUpXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_SIGN_UP) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
            }};            

            ConfirmSignUpResponse res = sdk.sdk.confirmSignUp(req);

            if (res.confirmSignUpResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroup

<p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequest("quasi", "ex") {{
                                description = "nulla";
                                precedence = 569211L;
                                roleArn = "voluptatibus";
                            }};, CreateGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_GROUP) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateGroupResponse res = sdk.sdk.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIdentityProvider

Creates an IdP for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIdentityProviderRequest;
import org.openapis.openapi.models.operations.CreateIdentityProviderResponse;
import org.openapis.openapi.models.operations.CreateIdentityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateIdentityProviderRequest;
import org.openapis.openapi.models.shared.IdentityProviderTypeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIdentityProviderRequest req = new CreateIdentityProviderRequest(                new CreateIdentityProviderRequest(                new java.util.HashMap<String, String>() {{
                                                put("inventore", "magnam");
                                                put("ea", "quo");
                                            }}, "consectetur", IdentityProviderTypeTypeEnum.OIDC, "aspernatur") {{
                                attributeMapping = new java.util.HashMap<String, String>() {{
                                    put("eaque", "a");
                                    put("libero", "aut");
                                }};
                                idpIdentifiers = new String[]{{
                                    add("deleniti"),
                                }};
                            }};, CreateIdentityProviderXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_IDENTITY_PROVIDER) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "fugit";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "non";
                xAmzSignedHeaders = "et";
            }};            

            CreateIdentityProviderResponse res = sdk.sdk.createIdentityProvider(req);

            if (res.createIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResourceServer

Creates a new OAuth2.0 resource server and defines custom scopes within it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceServerRequest;
import org.openapis.openapi.models.operations.CreateResourceServerResponse;
import org.openapis.openapi.models.operations.CreateResourceServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResourceServerRequest;
import org.openapis.openapi.models.shared.ResourceServerScopeType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceServerRequest req = new CreateResourceServerRequest(                new CreateResourceServerRequest("laborum", "placeat", "velit") {{
                                scopes = new org.openapis.openapi.models.shared.ResourceServerScopeType[]{{
                                    add(new ResourceServerScopeType("quas", "assumenda") {{
                                        scopeDescription = "autem";
                                        scopeName = "nobis";
                                    }}),
                                    add(new ResourceServerScopeType("libero", "quasi") {{
                                        scopeDescription = "nulla";
                                        scopeName = "voluptas";
                                    }}),
                                }};
                            }};, CreateResourceServerXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_RESOURCE_SERVER) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "explicabo";
                xAmzDate = "provident";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateResourceServerResponse res = sdk.sdk.createResourceServer(req);

            if (res.createResourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserImportJob

Creates the user import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserImportJobRequest;
import org.openapis.openapi.models.operations.CreateUserImportJobResponse;
import org.openapis.openapi.models.operations.CreateUserImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserImportJobRequest req = new CreateUserImportJobRequest(                new CreateUserImportJobRequest("eius", "esse", "esse");, CreateUserImportJobXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_IMPORT_JOB) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "reprehenderit";
                xAmzDate = "quidem";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "eum";
            }};            

            CreateUserImportJobResponse res = sdk.sdk.createUserImportJob(req);

            if (res.createUserImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserPool

<p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserPoolRequest;
import org.openapis.openapi.models.operations.CreateUserPoolResponse;
import org.openapis.openapi.models.operations.CreateUserPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountRecoverySettingType;
import org.openapis.openapi.models.shared.AdminCreateUserConfigType;
import org.openapis.openapi.models.shared.AdvancedSecurityModeTypeEnum;
import org.openapis.openapi.models.shared.AliasAttributeTypeEnum;
import org.openapis.openapi.models.shared.AttributeDataTypeEnum;
import org.openapis.openapi.models.shared.CreateUserPoolRequest;
import org.openapis.openapi.models.shared.CustomEmailLambdaVersionConfigType;
import org.openapis.openapi.models.shared.CustomEmailSenderLambdaVersionTypeEnum;
import org.openapis.openapi.models.shared.CustomSMSLambdaVersionConfigType;
import org.openapis.openapi.models.shared.CustomSMSSenderLambdaVersionTypeEnum;
import org.openapis.openapi.models.shared.DefaultEmailOptionTypeEnum;
import org.openapis.openapi.models.shared.DeletionProtectionTypeEnum;
import org.openapis.openapi.models.shared.DeviceConfigurationType;
import org.openapis.openapi.models.shared.EmailConfigurationType;
import org.openapis.openapi.models.shared.EmailSendingAccountTypeEnum;
import org.openapis.openapi.models.shared.LambdaConfigType;
import org.openapis.openapi.models.shared.MessageTemplateType;
import org.openapis.openapi.models.shared.NumberAttributeConstraintsType;
import org.openapis.openapi.models.shared.PasswordPolicyType;
import org.openapis.openapi.models.shared.RecoveryOptionNameTypeEnum;
import org.openapis.openapi.models.shared.RecoveryOptionType;
import org.openapis.openapi.models.shared.SchemaAttributeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmsConfigurationType;
import org.openapis.openapi.models.shared.StringAttributeConstraintsType;
import org.openapis.openapi.models.shared.UserAttributeUpdateSettingsType;
import org.openapis.openapi.models.shared.UserPoolAddOnsType;
import org.openapis.openapi.models.shared.UserPoolMfaTypeEnum;
import org.openapis.openapi.models.shared.UserPoolPolicyType;
import org.openapis.openapi.models.shared.UsernameAttributeTypeEnum;
import org.openapis.openapi.models.shared.UsernameConfigurationType;
import org.openapis.openapi.models.shared.VerificationMessageTemplateType;
import org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserPoolRequest req = new CreateUserPoolRequest(                new CreateUserPoolRequest("assumenda") {{
                                accountRecoverySetting = new AccountRecoverySettingType() {{
                                    recoveryMechanisms = new org.openapis.openapi.models.shared.RecoveryOptionType[]{{
                                        add(new RecoveryOptionType(RecoveryOptionNameTypeEnum.VERIFIED_EMAIL, 56848L) {{
                                            name = RecoveryOptionNameTypeEnum.VERIFIED_PHONE_NUMBER;
                                            priority = 788546L;
                                        }}),
                                    }};
                                }};;
                                adminCreateUserConfig = new AdminCreateUserConfigType() {{
                                    allowAdminCreateUserOnly = false;
                                    inviteMessageTemplate = new MessageTemplateType() {{
                                        emailMessage = "id";
                                        emailSubject = "quidem";
                                        smsMessage = "neque";
                                    }};;
                                    unusedAccountValidityDays = 778696L;
                                }};;
                                aliasAttributes = new org.openapis.openapi.models.shared.AliasAttributeTypeEnum[]{{
                                    add(AliasAttributeTypeEnum.PREFERRED_USERNAME),
                                    add(AliasAttributeTypeEnum.PREFERRED_USERNAME),
                                    add(AliasAttributeTypeEnum.PHONE_NUMBER),
                                    add(AliasAttributeTypeEnum.PHONE_NUMBER),
                                }};
                                autoVerifiedAttributes = new org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum[]{{
                                    add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                    add(VerifiedAttributeTypeEnum.EMAIL),
                                }};
                                deletionProtection = DeletionProtectionTypeEnum.ACTIVE;
                                deviceConfiguration = new DeviceConfigurationType() {{
                                    challengeRequiredOnNewDevice = false;
                                    deviceOnlyRememberedOnUserPrompt = false;
                                }};;
                                emailConfiguration = new EmailConfigurationType() {{
                                    configurationSet = "tempora";
                                    emailSendingAccount = EmailSendingAccountTypeEnum.DEVELOPER;
                                    from = "ipsam";
                                    replyToEmailAddress = "aspernatur";
                                    sourceArn = "sequi";
                                }};;
                                emailVerificationMessage = "quo";
                                emailVerificationSubject = "esse";
                                lambdaConfig = new LambdaConfigType() {{
                                    createAuthChallenge = "recusandae";
                                    customEmailSender = new CustomEmailLambdaVersionConfigType("aperiam", CustomEmailSenderLambdaVersionTypeEnum.V10);;
                                    customMessage = "distinctio";
                                    customSMSSender = new CustomSMSLambdaVersionConfigType("quod", CustomSMSSenderLambdaVersionTypeEnum.V10);;
                                    defineAuthChallenge = "dignissimos";
                                    kmsKeyID = "inventore";
                                    postAuthentication = "nihil";
                                    postConfirmation = "totam";
                                    preAuthentication = "accusamus";
                                    preSignUp = "aliquam";
                                    preTokenGeneration = "odio";
                                    userMigration = "occaecati";
                                    verifyAuthChallengeResponse = "commodi";
                                }};;
                                mfaConfiguration = UserPoolMfaTypeEnum.OPTIONAL;
                                policies = new UserPoolPolicyType() {{
                                    passwordPolicy = new PasswordPolicyType() {{
                                        minimumLength = 174112L;
                                        requireLowercase = false;
                                        requireNumbers = false;
                                        requireSymbols = false;
                                        requireUppercase = false;
                                        temporaryPasswordValidityDays = 645570L;
                                    }};;
                                }};;
                                schema = new org.openapis.openapi.models.shared.SchemaAttributeType[]{{
                                    add(new SchemaAttributeType() {{
                                        attributeDataType = AttributeDataTypeEnum.STRING;
                                        developerOnlyAttribute = false;
                                        mutable = false;
                                        name = "Franklin Lynch";
                                        numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                            maxValue = "deleniti";
                                            minValue = "fugit";
                                        }};
                                        required = false;
                                        stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                            maxLength = "fuga";
                                            minLength = "mollitia";
                                        }};
                                    }}),
                                    add(new SchemaAttributeType() {{
                                        attributeDataType = AttributeDataTypeEnum.NUMBER;
                                        developerOnlyAttribute = false;
                                        mutable = false;
                                        name = "Roy Hansen";
                                        numberAttributeConstraints = new NumberAttributeConstraintsType() {{
                                            maxValue = "sapiente";
                                            minValue = "consequuntur";
                                        }};
                                        required = false;
                                        stringAttributeConstraints = new StringAttributeConstraintsType() {{
                                            maxLength = "ratione";
                                            minLength = "explicabo";
                                        }};
                                    }}),
                                }};
                                smsAuthenticationMessage = "saepe";
                                smsConfiguration = new SmsConfigurationType("occaecati") {{
                                    externalId = "atque";
                                    snsRegion = "et";
                                }};;
                                smsVerificationMessage = "esse";
                                userAttributeUpdateSettings = new UserAttributeUpdateSettingsType() {{
                                    attributesRequireVerificationBeforeUpdate = new org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum[]{{
                                        add(VerifiedAttributeTypeEnum.EMAIL),
                                        add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                        add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                        add(VerifiedAttributeTypeEnum.EMAIL),
                                    }};
                                }};;
                                userPoolAddOns = new UserPoolAddOnsType(AdvancedSecurityModeTypeEnum.ENFORCED);;
                                userPoolTags = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "quasi");
                                    put("saepe", "vel");
                                    put("harum", "molestiae");
                                    put("rerum", "occaecati");
                                }};
                                usernameAttributes = new org.openapis.openapi.models.shared.UsernameAttributeTypeEnum[]{{
                                    add(UsernameAttributeTypeEnum.EMAIL),
                                    add(UsernameAttributeTypeEnum.EMAIL),
                                }};
                                usernameConfiguration = new UsernameConfigurationType(false);;
                                verificationMessageTemplate = new VerificationMessageTemplateType() {{
                                    defaultEmailOption = DefaultEmailOptionTypeEnum.CONFIRM_WITH_LINK;
                                    emailMessage = "culpa";
                                    emailMessageByLink = "tempore";
                                    emailSubject = "adipisci";
                                    emailSubjectByLink = "cumque";
                                    smsMessage = "consequuntur";
                                }};;
                            }};, CreateUserPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL) {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quaerat";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "blanditiis";
            }};            

            CreateUserPoolResponse res = sdk.sdk.createUserPool(req);

            if (res.createUserPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserPoolClient

<p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserPoolClientRequest;
import org.openapis.openapi.models.operations.CreateUserPoolClientResponse;
import org.openapis.openapi.models.operations.CreateUserPoolClientXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsConfigurationType;
import org.openapis.openapi.models.shared.CreateUserPoolClientRequest;
import org.openapis.openapi.models.shared.ExplicitAuthFlowsTypeEnum;
import org.openapis.openapi.models.shared.OAuthFlowTypeEnum;
import org.openapis.openapi.models.shared.PreventUserExistenceErrorTypesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitsTypeEnum;
import org.openapis.openapi.models.shared.TokenValidityUnitsType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserPoolClientRequest req = new CreateUserPoolClientRequest(                new CreateUserPoolClientRequest("a", "nulla") {{
                                accessTokenValidity = 557811L;
                                allowedOAuthFlows = new org.openapis.openapi.models.shared.OAuthFlowTypeEnum[]{{
                                    add(OAuthFlowTypeEnum.CODE),
                                    add(OAuthFlowTypeEnum.CLIENT_CREDENTIALS),
                                }};
                                allowedOAuthFlowsUserPoolClient = false;
                                allowedOAuthScopes = new String[]{{
                                    add("sint"),
                                    add("pariatur"),
                                    add("possimus"),
                                }};
                                analyticsConfiguration = new AnalyticsConfigurationType() {{
                                    applicationArn = "quia";
                                    applicationId = "eveniet";
                                    externalId = "asperiores";
                                    roleArn = "facere";
                                    userDataShared = false;
                                }};;
                                authSessionValidity = 85001L;
                                callbackURLs = new String[]{{
                                    add("quasi"),
                                }};
                                defaultRedirectURI = "similique";
                                enablePropagateAdditionalUserContextData = false;
                                enableTokenRevocation = false;
                                explicitAuthFlows = new org.openapis.openapi.models.shared.ExplicitAuthFlowsTypeEnum[]{{
                                    add(ExplicitAuthFlowsTypeEnum.ALLOW_ADMIN_USER_PASSWORD_AUTH),
                                    add(ExplicitAuthFlowsTypeEnum.ALLOW_REFRESH_TOKEN_AUTH),
                                    add(ExplicitAuthFlowsTypeEnum.ADMIN_NO_SRP_AUTH),
                                }};
                                generateSecret = false;
                                idTokenValidity = 936747L;
                                logoutURLs = new String[]{{
                                    add("in"),
                                    add("eius"),
                                }};
                                preventUserExistenceErrors = PreventUserExistenceErrorTypesEnum.ENABLED;
                                readAttributes = new String[]{{
                                    add("soluta"),
                                    add("accusantium"),
                                    add("aliquam"),
                                    add("sapiente"),
                                }};
                                refreshTokenValidity = 119771L;
                                supportedIdentityProviders = new String[]{{
                                    add("reprehenderit"),
                                    add("ullam"),
                                }};
                                tokenValidityUnits = new TokenValidityUnitsType() {{
                                    accessToken = TimeUnitsTypeEnum.MINUTES;
                                    idToken = TimeUnitsTypeEnum.SECONDS;
                                    refreshToken = TimeUnitsTypeEnum.HOURS;
                                }};;
                                writeAttributes = new String[]{{
                                    add("quibusdam"),
                                }};
                            }};, CreateUserPoolClientXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL_CLIENT) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "itaque";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "tenetur";
            }};            

            CreateUserPoolClientResponse res = sdk.sdk.createUserPoolClient(req);

            if (res.createUserPoolClientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserPoolDomain

Creates a new domain for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserPoolDomainRequest;
import org.openapis.openapi.models.operations.CreateUserPoolDomainResponse;
import org.openapis.openapi.models.operations.CreateUserPoolDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserPoolDomainRequest;
import org.openapis.openapi.models.shared.CustomDomainConfigType;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserPoolDomainRequest req = new CreateUserPoolDomainRequest(                new CreateUserPoolDomainRequest("at", "et") {{
                                customDomainConfig = new CustomDomainConfigType("voluptate");;
                            }};, CreateUserPoolDomainXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL_DOMAIN) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "minima";
                xAmzCredential = "veritatis";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "temporibus";
            }};            

            CreateUserPoolDomainResponse res = sdk.sdk.createUserPoolDomain(req);

            if (res.createUserPoolDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

<p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.operations.DeleteGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest(                new DeleteGroupRequest("rem", "aut");, DeleteGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_GROUP) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "mollitia";
                xAmzDate = "ab";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "non";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DeleteGroupResponse res = sdk.sdk.deleteGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIdentityProvider

Deletes an IdP for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIdentityProviderRequest;
import org.openapis.openapi.models.operations.DeleteIdentityProviderResponse;
import org.openapis.openapi.models.operations.DeleteIdentityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIdentityProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIdentityProviderRequest req = new DeleteIdentityProviderRequest(                new DeleteIdentityProviderRequest("occaecati", "numquam");, DeleteIdentityProviderXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_IDENTITY_PROVIDER) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "voluptas";
                xAmzDate = "aut";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteIdentityProviderResponse res = sdk.sdk.deleteIdentityProvider(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceServer

Deletes a resource server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceServerRequest;
import org.openapis.openapi.models.operations.DeleteResourceServerResponse;
import org.openapis.openapi.models.operations.DeleteResourceServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceServerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceServerRequest req = new DeleteResourceServerRequest(                new DeleteResourceServerRequest("velit", "voluptatibus");, DeleteResourceServerXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_RESOURCE_SERVER) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "aperiam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "repellendus";
            }};            

            DeleteResourceServerResponse res = sdk.sdk.deleteResourceServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Allows a user to delete himself or herself.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest("maxime");, DeleteUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserAttributes

Deletes the attributes for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserAttributesRequest;
import org.openapis.openapi.models.operations.DeleteUserAttributesResponse;
import org.openapis.openapi.models.operations.DeleteUserAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserAttributesRequest req = new DeleteUserAttributesRequest(                new DeleteUserAttributesRequest("labore",                 new String[]{{
                                                add("adipisci"),
                                            }});, DeleteUserAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_ATTRIBUTES) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "id";
                xAmzCredential = "suscipit";
                xAmzDate = "velit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "est";
                xAmzSignedHeaders = "recusandae";
            }};            

            DeleteUserAttributesResponse res = sdk.sdk.deleteUserAttributes(req);

            if (res.deleteUserAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserPool

Deletes the specified Amazon Cognito user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserPoolRequest;
import org.openapis.openapi.models.operations.DeleteUserPoolResponse;
import org.openapis.openapi.models.operations.DeleteUserPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserPoolRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserPoolRequest req = new DeleteUserPoolRequest(                new DeleteUserPoolRequest("fugiat");, DeleteUserPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "quos";
                xAmzDate = "vel";
                xAmzSecurityToken = "labore";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "facilis";
            }};            

            DeleteUserPoolResponse res = sdk.sdk.deleteUserPool(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserPoolClient

Allows the developer to delete the user pool client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserPoolClientRequest;
import org.openapis.openapi.models.operations.DeleteUserPoolClientResponse;
import org.openapis.openapi.models.operations.DeleteUserPoolClientXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserPoolClientRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserPoolClientRequest req = new DeleteUserPoolClientRequest(                new DeleteUserPoolClientRequest("commodi", "in");, DeleteUserPoolClientXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL_CLIENT) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "assumenda";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "aperiam";
            }};            

            DeleteUserPoolClientResponse res = sdk.sdk.deleteUserPoolClient(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserPoolDomain

Deletes a domain for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserPoolDomainRequest;
import org.openapis.openapi.models.operations.DeleteUserPoolDomainResponse;
import org.openapis.openapi.models.operations.DeleteUserPoolDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserPoolDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserPoolDomainRequest req = new DeleteUserPoolDomainRequest(                new DeleteUserPoolDomainRequest("consectetur", "in");, DeleteUserPoolDomainXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL_DOMAIN) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "earum";
                xAmzCredential = "facere";
                xAmzDate = "numquam";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeleteUserPoolDomainResponse res = sdk.sdk.deleteUserPoolDomain(req);

            if (res.deleteUserPoolDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIdentityProvider

Gets information about a specific IdP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIdentityProviderRequest;
import org.openapis.openapi.models.operations.DescribeIdentityProviderResponse;
import org.openapis.openapi.models.operations.DescribeIdentityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIdentityProviderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIdentityProviderRequest req = new DescribeIdentityProviderRequest(                new DescribeIdentityProviderRequest("saepe", "necessitatibus");, DescribeIdentityProviderXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_IDENTITY_PROVIDER) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "asperiores";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "non";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "beatae";
            }};            

            DescribeIdentityProviderResponse res = sdk.sdk.describeIdentityProvider(req);

            if (res.describeIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResourceServer

Describes a resource server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourceServerRequest;
import org.openapis.openapi.models.operations.DescribeResourceServerResponse;
import org.openapis.openapi.models.operations.DescribeResourceServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeResourceServerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourceServerRequest req = new DescribeResourceServerRequest(                new DescribeResourceServerRequest("a", "debitis");, DescribeResourceServerXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_RESOURCE_SERVER) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "harum";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "libero";
            }};            

            DescribeResourceServerResponse res = sdk.sdk.describeResourceServer(req);

            if (res.describeResourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRiskConfiguration

Describes the risk configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRiskConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeRiskConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeRiskConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRiskConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRiskConfigurationRequest req = new DescribeRiskConfigurationRequest(                new DescribeRiskConfigurationRequest("accusamus") {{
                                clientId = "similique";
                            }};, DescribeRiskConfigurationXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_RISK_CONFIGURATION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeRiskConfigurationResponse res = sdk.sdk.describeRiskConfiguration(req);

            if (res.describeRiskConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserImportJob

Describes the user import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserImportJobRequest;
import org.openapis.openapi.models.operations.DescribeUserImportJobResponse;
import org.openapis.openapi.models.operations.DescribeUserImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserImportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserImportJobRequest req = new DescribeUserImportJobRequest(                new DescribeUserImportJobRequest("adipisci", "minus");, DescribeUserImportJobXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_IMPORT_JOB) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "in";
                xAmzDate = "dolore";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "temporibus";
            }};            

            DescribeUserImportJobResponse res = sdk.sdk.describeUserImportJob(req);

            if (res.describeUserImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserPool

Returns the configuration information and metadata of the specified user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserPoolRequest;
import org.openapis.openapi.models.operations.DescribeUserPoolResponse;
import org.openapis.openapi.models.operations.DescribeUserPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserPoolRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserPoolRequest req = new DescribeUserPoolRequest(                new DescribeUserPoolRequest("adipisci");, DescribeUserPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
            }};            

            DescribeUserPoolResponse res = sdk.sdk.describeUserPool(req);

            if (res.describeUserPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserPoolClient

Client method for returning the configuration information and metadata of the specified user pool app client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserPoolClientRequest;
import org.openapis.openapi.models.operations.DescribeUserPoolClientResponse;
import org.openapis.openapi.models.operations.DescribeUserPoolClientXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserPoolClientRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserPoolClientRequest req = new DescribeUserPoolClientRequest(                new DescribeUserPoolClientRequest("totam", "hic");, DescribeUserPoolClientXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL_CLIENT) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "sit";
                xAmzDate = "rerum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "explicabo";
            }};            

            DescribeUserPoolClientResponse res = sdk.sdk.describeUserPoolClient(req);

            if (res.describeUserPoolClientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUserPoolDomain

Gets information about a domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserPoolDomainRequest;
import org.openapis.openapi.models.operations.DescribeUserPoolDomainResponse;
import org.openapis.openapi.models.operations.DescribeUserPoolDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserPoolDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserPoolDomainRequest req = new DescribeUserPoolDomainRequest(                new DescribeUserPoolDomainRequest("facilis");, DescribeUserPoolDomainXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL_DOMAIN) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "ab";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "sed";
            }};            

            DescribeUserPoolDomainResponse res = sdk.sdk.describeUserPoolDomain(req);

            if (res.describeUserPoolDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forgetDevice

Forgets the specified device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgetDeviceRequest;
import org.openapis.openapi.models.operations.ForgetDeviceResponse;
import org.openapis.openapi.models.operations.ForgetDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ForgetDeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ForgetDeviceRequest req = new ForgetDeviceRequest(                new ForgetDeviceRequest("commodi") {{
                                accessToken = "quidem";
                            }};, ForgetDeviceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_FORGET_DEVICE) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "unde";
                xAmzDate = "architecto";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "debitis";
            }};            

            ForgetDeviceResponse res = sdk.sdk.forgetDevice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## forgotPassword

<p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ForgotPasswordRequest;
import org.openapis.openapi.models.operations.ForgotPasswordResponse;
import org.openapis.openapi.models.operations.ForgotPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ForgotPasswordRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ForgotPasswordRequest req = new ForgotPasswordRequest(                new ForgotPasswordRequest("reiciendis", "perferendis") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "corrupti";
                                }};;
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("incidunt", "sed");
                                    put("provident", "eius");
                                    put("necessitatibus", "ipsum");
                                    put("ea", "occaecati");
                                }};
                                secretHash = "quos";
                                userContextData = new UserContextDataType() {{
                                    encodedData = "voluptatibus";
                                    ipAddress = "tempora";
                                }};;
                            }};, ForgotPasswordXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_FORGOT_PASSWORD) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            ForgotPasswordResponse res = sdk.sdk.forgotPassword(req);

            if (res.forgotPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCSVHeader

Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCSVHeaderRequest;
import org.openapis.openapi.models.operations.GetCSVHeaderResponse;
import org.openapis.openapi.models.operations.GetCSVHeaderXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCSVHeaderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCSVHeaderRequest req = new GetCSVHeaderRequest(                new GetCSVHeaderRequest("facilis");, GetCSVHeaderXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_CSV_HEADER) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ipsam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "rem";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "nobis";
            }};            

            GetCSVHeaderResponse res = sdk.sdk.getCSVHeader(req);

            if (res.getCSVHeaderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

Gets the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;
import org.openapis.openapi.models.operations.GetDeviceXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDeviceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceRequest req = new GetDeviceRequest(                new GetDeviceRequest("veniam") {{
                                accessToken = "minima";
                            }};, GetDeviceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_DEVICE) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "nulla";
                xAmzDate = "magni";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "numquam";
            }};            

            GetDeviceResponse res = sdk.sdk.getDevice(req);

            if (res.getDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroup

<p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.operations.GetGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupRequest req = new GetGroupRequest(                new GetGroupRequest("in", "officiis");, GetGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_GROUP) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "exercitationem";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "cum";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetGroupResponse res = sdk.sdk.getGroup(req);

            if (res.getGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIdentityProviderByIdentifier

Gets the specified IdP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentityProviderByIdentifierRequest;
import org.openapis.openapi.models.operations.GetIdentityProviderByIdentifierResponse;
import org.openapis.openapi.models.operations.GetIdentityProviderByIdentifierXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetIdentityProviderByIdentifierRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIdentityProviderByIdentifierRequest req = new GetIdentityProviderByIdentifierRequest(                new GetIdentityProviderByIdentifierRequest("error", "hic");, GetIdentityProviderByIdentifierXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_IDENTITY_PROVIDER_BY_IDENTIFIER) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "neque";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetIdentityProviderByIdentifierResponse res = sdk.sdk.getIdentityProviderByIdentifier(req);

            if (res.getIdentityProviderByIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSigningCertificate

<p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSigningCertificateRequest;
import org.openapis.openapi.models.operations.GetSigningCertificateResponse;
import org.openapis.openapi.models.operations.GetSigningCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSigningCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSigningCertificateRequest req = new GetSigningCertificateRequest(                new GetSigningCertificateRequest("accusamus");, GetSigningCertificateXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_SIGNING_CERTIFICATE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "atque";
                xAmzCredential = "fugit";
                xAmzDate = "ut";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "culpa";
            }};            

            GetSigningCertificateResponse res = sdk.sdk.getSigningCertificate(req);

            if (res.getSigningCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUICustomization

Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUICustomizationRequest;
import org.openapis.openapi.models.operations.GetUICustomizationResponse;
import org.openapis.openapi.models.operations.GetUICustomizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUICustomizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUICustomizationRequest req = new GetUICustomizationRequest(                new GetUICustomizationRequest("magnam") {{
                                clientId = "consequatur";
                            }};, GetUICustomizationXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_UI_CUSTOMIZATION) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "sit";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "corporis";
            }};            

            GetUICustomizationResponse res = sdk.sdk.getUICustomization(req);

            if (res.getUICustomizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Gets the user attributes and metadata for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest(                new GetUserRequest("blanditiis");, GetUserXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sed";
                xAmzCredential = "sit";
                xAmzDate = "vel";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "error";
            }};            

            GetUserResponse res = sdk.sdk.getUser(req);

            if (res.getUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAttributeVerificationCode

<p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAttributeVerificationCodeRequest;
import org.openapis.openapi.models.operations.GetUserAttributeVerificationCodeResponse;
import org.openapis.openapi.models.operations.GetUserAttributeVerificationCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUserAttributeVerificationCodeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserAttributeVerificationCodeRequest req = new GetUserAttributeVerificationCodeRequest(                new GetUserAttributeVerificationCodeRequest("incidunt", "reiciendis") {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("harum", "dicta");
                                }};
                            }};, GetUserAttributeVerificationCodeXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_ATTRIBUTE_VERIFICATION_CODE) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "labore";
                xAmzDate = "quidem";
                xAmzSecurityToken = "atque";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "nam";
            }};            

            GetUserAttributeVerificationCodeResponse res = sdk.sdk.getUserAttributeVerificationCode(req);

            if (res.getUserAttributeVerificationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPoolMfaConfig

Gets the user pool multi-factor authentication (MFA) configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPoolMfaConfigRequest;
import org.openapis.openapi.models.operations.GetUserPoolMfaConfigResponse;
import org.openapis.openapi.models.operations.GetUserPoolMfaConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetUserPoolMfaConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserPoolMfaConfigRequest req = new GetUserPoolMfaConfigRequest(                new GetUserPoolMfaConfigRequest("laboriosam");, GetUserPoolMfaConfigXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_POOL_MFA_CONFIG) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "provident";
            }};            

            GetUserPoolMfaConfigResponse res = sdk.sdk.getUserPoolMfaConfig(req);

            if (res.getUserPoolMfaConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## globalSignOut

Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GlobalSignOutRequest;
import org.openapis.openapi.models.operations.GlobalSignOutResponse;
import org.openapis.openapi.models.operations.GlobalSignOutXAmzTargetEnum;
import org.openapis.openapi.models.shared.GlobalSignOutRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GlobalSignOutRequest req = new GlobalSignOutRequest(                new GlobalSignOutRequest("delectus");, GlobalSignOutXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GLOBAL_SIGN_OUT) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
            }};            

            GlobalSignOutResponse res = sdk.sdk.globalSignOut(req);

            if (res.globalSignOutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## initiateAuth

<p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InitiateAuthRequest;
import org.openapis.openapi.models.operations.InitiateAuthResponse;
import org.openapis.openapi.models.operations.InitiateAuthXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.AuthFlowTypeEnum;
import org.openapis.openapi.models.shared.InitiateAuthRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InitiateAuthRequest req = new InitiateAuthRequest(                new InitiateAuthRequest(AuthFlowTypeEnum.ADMIN_NO_SRP_AUTH, "veniam") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "voluptatem";
                                }};;
                                authParameters = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "quasi");
                                    put("atque", "reprehenderit");
                                    put("asperiores", "totam");
                                    put("suscipit", "quidem");
                                }};
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("et", "esse");
                                    put("amet", "assumenda");
                                    put("ea", "atque");
                                    put("error", "officiis");
                                }};
                                userContextData = new UserContextDataType() {{
                                    encodedData = "officiis";
                                    ipAddress = "accusamus";
                                }};;
                            }};, InitiateAuthXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_INITIATE_AUTH) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "minima";
                xAmzCredential = "aspernatur";
                xAmzDate = "ex";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "at";
            }};            

            InitiateAuthResponse res = sdk.sdk.initiateAuth(req);

            if (res.initiateAuthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevices

Lists the sign-in devices that Amazon Cognito has registered to the current user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevicesRequest;
import org.openapis.openapi.models.operations.ListDevicesResponse;
import org.openapis.openapi.models.operations.ListDevicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDevicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevicesRequest req = new ListDevicesRequest(                new ListDevicesRequest("blanditiis") {{
                                limit = 379356L;
                                paginationToken = "repudiandae";
                            }};, ListDevicesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_DEVICES) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sunt";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "labore";
            }};            

            ListDevicesResponse res = sdk.sdk.listDevices(req);

            if (res.listDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroups

<p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsRequest;
import org.openapis.openapi.models.operations.ListGroupsResponse;
import org.openapis.openapi.models.operations.ListGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupsRequest req = new ListGroupsRequest(                new ListGroupsRequest("doloremque") {{
                                limit = 919783L;
                                nextToken = "dicta";
                            }};, ListGroupsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_GROUPS) {{
                limit = "accusantium";
                nextToken = "beatae";
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "enim";
                xAmzCredential = "laboriosam";
                xAmzDate = "velit";
                xAmzSecurityToken = "a";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "magnam";
            }};            

            ListGroupsResponse res = sdk.sdk.listGroups(req);

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIdentityProviders

Lists information about all IdPs for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIdentityProvidersRequest;
import org.openapis.openapi.models.operations.ListIdentityProvidersResponse;
import org.openapis.openapi.models.operations.ListIdentityProvidersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIdentityProvidersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIdentityProvidersRequest req = new ListIdentityProvidersRequest(                new ListIdentityProvidersRequest("consequuntur") {{
                                maxResults = 580107L;
                                nextToken = "officiis";
                            }};, ListIdentityProvidersXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_IDENTITY_PROVIDERS) {{
                maxResults = "perspiciatis";
                nextToken = "in";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "occaecati";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quis";
            }};            

            ListIdentityProvidersResponse res = sdk.sdk.listIdentityProviders(req);

            if (res.listIdentityProvidersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceServers

Lists the resource servers for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceServersRequest;
import org.openapis.openapi.models.operations.ListResourceServersResponse;
import org.openapis.openapi.models.operations.ListResourceServersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceServersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceServersRequest req = new ListResourceServersRequest(                new ListResourceServersRequest("error") {{
                                maxResults = 76486L;
                                nextToken = "corporis";
                            }};, ListResourceServersXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_RESOURCE_SERVERS) {{
                maxResults = "quidem";
                nextToken = "eveniet";
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "vero";
                xAmzCredential = "doloremque";
                xAmzDate = "iure";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "quae";
            }};            

            ListResourceServersResponse res = sdk.sdk.listResourceServers(req);

            if (res.listResourceServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("eveniet");, ListTagsForResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cum";
                xAmzCredential = "iure";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "distinctio";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserImportJobs

Lists the user import jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserImportJobsRequest;
import org.openapis.openapi.models.operations.ListUserImportJobsResponse;
import org.openapis.openapi.models.operations.ListUserImportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUserImportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserImportJobsRequest req = new ListUserImportJobsRequest(                new ListUserImportJobsRequest(523006L, "aliquam") {{
                                paginationToken = "ad";
                            }};, ListUserImportJobsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_IMPORT_JOBS) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "alias";
                xAmzCredential = "corporis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListUserImportJobsResponse res = sdk.sdk.listUserImportJobs(req);

            if (res.listUserImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserPoolClients

Lists the clients that have been created for the specified user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserPoolClientsRequest;
import org.openapis.openapi.models.operations.ListUserPoolClientsResponse;
import org.openapis.openapi.models.operations.ListUserPoolClientsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUserPoolClientsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserPoolClientsRequest req = new ListUserPoolClientsRequest(                new ListUserPoolClientsRequest("maiores") {{
                                maxResults = 970222L;
                                nextToken = "dolores";
                            }};, ListUserPoolClientsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_POOL_CLIENTS) {{
                maxResults = "id";
                nextToken = "minima";
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "nesciunt";
                xAmzDate = "quae";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quaerat";
            }};            

            ListUserPoolClientsResponse res = sdk.sdk.listUserPoolClients(req);

            if (res.listUserPoolClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUserPools

Lists the user pools associated with an Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUserPoolsRequest;
import org.openapis.openapi.models.operations.ListUserPoolsResponse;
import org.openapis.openapi.models.operations.ListUserPoolsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUserPoolsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUserPoolsRequest req = new ListUserPoolsRequest(                new ListUserPoolsRequest(403218L) {{
                                nextToken = "ut";
                            }};, ListUserPoolsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_POOLS) {{
                maxResults = "culpa";
                nextToken = "adipisci";
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "provident";
            }};            

            ListUserPoolsResponse res = sdk.sdk.listUserPools(req);

            if (res.listUserPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsers

Lists the users in the Amazon Cognito user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersRequest;
import org.openapis.openapi.models.operations.ListUsersResponse;
import org.openapis.openapi.models.operations.ListUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsersRequest req = new ListUsersRequest(                new ListUsersRequest("eum") {{
                                attributesToGet = new String[]{{
                                    add("provident"),
                                    add("aspernatur"),
                                    add("ullam"),
                                    add("quasi"),
                                }};
                                filter = "animi";
                                limit = 343392L;
                                paginationToken = "mollitia";
                            }};, ListUsersXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USERS) {{
                limit = "provident";
                paginationToken = "possimus";
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "aliquid";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ullam";
            }};            

            ListUsersResponse res = sdk.sdk.listUsers(req);

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsersInGroup

<p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersInGroupRequest;
import org.openapis.openapi.models.operations.ListUsersInGroupResponse;
import org.openapis.openapi.models.operations.ListUsersInGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUsersInGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsersInGroupRequest req = new ListUsersInGroupRequest(                new ListUsersInGroupRequest("nam", "earum") {{
                                limit = 637583L;
                                nextToken = "laborum";
                            }};, ListUsersInGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USERS_IN_GROUP) {{
                limit = "placeat";
                nextToken = "modi";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "officiis";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "rerum";
            }};            

            ListUsersInGroupResponse res = sdk.sdk.listUsersInGroup(req);

            if (res.listUsersInGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendConfirmationCode

<p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendConfirmationCodeRequest;
import org.openapis.openapi.models.operations.ResendConfirmationCodeResponse;
import org.openapis.openapi.models.operations.ResendConfirmationCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ResendConfirmationCodeRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResendConfirmationCodeRequest req = new ResendConfirmationCodeRequest(                new ResendConfirmationCodeRequest("quis", "inventore") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "fugit";
                                }};;
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("quae", "perferendis");
                                    put("velit", "aspernatur");
                                    put("eum", "eius");
                                    put("rem", "at");
                                }};
                                secretHash = "impedit";
                                userContextData = new UserContextDataType() {{
                                    encodedData = "eos";
                                    ipAddress = "sapiente";
                                }};;
                            }};, ResendConfirmationCodeXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_RESEND_CONFIRMATION_CODE) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "minima";
                xAmzDate = "beatae";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "earum";
            }};            

            ResendConfirmationCodeResponse res = sdk.sdk.resendConfirmationCode(req);

            if (res.resendConfirmationCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## respondToAuthChallenge

<p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RespondToAuthChallengeRequest;
import org.openapis.openapi.models.operations.RespondToAuthChallengeResponse;
import org.openapis.openapi.models.operations.RespondToAuthChallengeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.ChallengeNameTypeEnum;
import org.openapis.openapi.models.shared.RespondToAuthChallengeRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RespondToAuthChallengeRequest req = new RespondToAuthChallengeRequest(                new RespondToAuthChallengeRequest(ChallengeNameTypeEnum.NEW_PASSWORD_REQUIRED, "illum") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "eaque";
                                }};;
                                challengeResponses = new java.util.HashMap<String, String>() {{
                                    put("perspiciatis", "maiores");
                                    put("debitis", "aliquid");
                                    put("porro", "suscipit");
                                    put("dolorem", "fugit");
                                }};
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("fuga", "ratione");
                                    put("animi", "necessitatibus");
                                    put("nulla", "consequatur");
                                    put("quasi", "et");
                                }};
                                session = "ducimus";
                                userContextData = new UserContextDataType() {{
                                    encodedData = "natus";
                                    ipAddress = "occaecati";
                                }};;
                            }};, RespondToAuthChallengeXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_RESPOND_TO_AUTH_CHALLENGE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "quasi";
                xAmzDate = "magni";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            RespondToAuthChallengeResponse res = sdk.sdk.respondToAuthChallenge(req);

            if (res.respondToAuthChallengeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeToken

Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeTokenRequest;
import org.openapis.openapi.models.operations.RevokeTokenResponse;
import org.openapis.openapi.models.operations.RevokeTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.RevokeTokenRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RevokeTokenRequest req = new RevokeTokenRequest(                new RevokeTokenRequest("tempora", "nihil") {{
                                clientSecret = "molestiae";
                            }};, RevokeTokenXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_REVOKE_TOKEN) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "esse";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "vel";
            }};            

            RevokeTokenResponse res = sdk.sdk.revokeToken(req);

            if (res.revokeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setRiskConfiguration

<p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetRiskConfigurationRequest;
import org.openapis.openapi.models.operations.SetRiskConfigurationResponse;
import org.openapis.openapi.models.operations.SetRiskConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountTakeoverActionType;
import org.openapis.openapi.models.shared.AccountTakeoverActionsType;
import org.openapis.openapi.models.shared.AccountTakeoverEventActionTypeEnum;
import org.openapis.openapi.models.shared.AccountTakeoverRiskConfigurationType;
import org.openapis.openapi.models.shared.CompromisedCredentialsActionsType;
import org.openapis.openapi.models.shared.CompromisedCredentialsEventActionTypeEnum;
import org.openapis.openapi.models.shared.CompromisedCredentialsRiskConfigurationType;
import org.openapis.openapi.models.shared.EventFilterTypeEnum;
import org.openapis.openapi.models.shared.NotifyConfigurationType;
import org.openapis.openapi.models.shared.NotifyEmailType;
import org.openapis.openapi.models.shared.RiskExceptionConfigurationType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetRiskConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetRiskConfigurationRequest req = new SetRiskConfigurationRequest(                new SetRiskConfigurationRequest("fugiat") {{
                                accountTakeoverRiskConfiguration = new AccountTakeoverRiskConfigurationType(                new AccountTakeoverActionsType() {{
                                                    highAction = new AccountTakeoverActionType(AccountTakeoverEventActionTypeEnum.BLOCK, false);;
                                                    lowAction = new AccountTakeoverActionType(AccountTakeoverEventActionTypeEnum.BLOCK, false);;
                                                    mediumAction = new AccountTakeoverActionType(AccountTakeoverEventActionTypeEnum.MFA_IF_CONFIGURED, false);;
                                                }};) {{
                                    notifyConfiguration = new NotifyConfigurationType("tempora") {{
                                        blockEmail = new NotifyEmailType("esse") {{
                                            htmlBody = "ex";
                                            textBody = "consectetur";
                                        }};;
                                        from = "aliquid";
                                        mfaEmail = new NotifyEmailType("ipsa") {{
                                            htmlBody = "laborum";
                                            textBody = "sunt";
                                        }};;
                                        noActionEmail = new NotifyEmailType("nostrum") {{
                                            htmlBody = "fugiat";
                                            textBody = "expedita";
                                        }};;
                                        replyTo = "aliquid";
                                    }};;
                                }};;
                                clientId = "officia";
                                compromisedCredentialsRiskConfiguration = new CompromisedCredentialsRiskConfigurationType(                new CompromisedCredentialsActionsType(CompromisedCredentialsEventActionTypeEnum.BLOCK);) {{
                                    eventFilter = new org.openapis.openapi.models.shared.EventFilterTypeEnum[]{{
                                        add(EventFilterTypeEnum.SIGN_IN),
                                        add(EventFilterTypeEnum.PASSWORD_CHANGE),
                                    }};
                                }};;
                                riskExceptionConfiguration = new RiskExceptionConfigurationType() {{
                                    blockedIPRangeList = new String[]{{
                                        add("iste"),
                                        add("id"),
                                    }};
                                    skippedIPRangeList = new String[]{{
                                        add("error"),
                                    }};
                                }};;
                            }};, SetRiskConfigurationXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_RISK_CONFIGURATION) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "libero";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "deleniti";
            }};            

            SetRiskConfigurationResponse res = sdk.sdk.setRiskConfiguration(req);

            if (res.setRiskConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setUICustomization

<p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetUICustomizationRequest;
import org.openapis.openapi.models.operations.SetUICustomizationResponse;
import org.openapis.openapi.models.operations.SetUICustomizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetUICustomizationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetUICustomizationRequest req = new SetUICustomizationRequest(                new SetUICustomizationRequest("vitae") {{
                                css = "repellendus";
                                clientId = "ex";
                                imageFile = "quo";
                            }};, SetUICustomizationXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_UI_CUSTOMIZATION) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "ut";
                xAmzCredential = "ad";
                xAmzDate = "expedita";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "cum";
            }};            

            SetUICustomizationResponse res = sdk.sdk.setUICustomization(req);

            if (res.setUICustomizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setUserMFAPreference

Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetUserMFAPreferenceRequest;
import org.openapis.openapi.models.operations.SetUserMFAPreferenceResponse;
import org.openapis.openapi.models.operations.SetUserMFAPreferenceXAmzTargetEnum;
import org.openapis.openapi.models.shared.SMSMfaSettingsType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetUserMFAPreferenceRequest;
import org.openapis.openapi.models.shared.SoftwareTokenMfaSettingsType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetUserMFAPreferenceRequest req = new SetUserMFAPreferenceRequest(                new SetUserMFAPreferenceRequest("beatae") {{
                                smsMfaSettings = new SMSMfaSettingsType() {{
                                    enabled = false;
                                    preferredMfa = false;
                                }};;
                                softwareTokenMfaSettings = new SoftwareTokenMfaSettingsType() {{
                                    enabled = false;
                                    preferredMfa = false;
                                }};;
                            }};, SetUserMFAPreferenceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_MFA_PREFERENCE) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "veritatis";
                xAmzDate = "rerum";
                xAmzSecurityToken = "est";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "voluptatem";
            }};            

            SetUserMFAPreferenceResponse res = sdk.sdk.setUserMFAPreference(req);

            if (res.setUserMFAPreferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setUserPoolMfaConfig

<p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetUserPoolMfaConfigRequest;
import org.openapis.openapi.models.operations.SetUserPoolMfaConfigResponse;
import org.openapis.openapi.models.operations.SetUserPoolMfaConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetUserPoolMfaConfigRequest;
import org.openapis.openapi.models.shared.SmsConfigurationType;
import org.openapis.openapi.models.shared.SmsMfaConfigType;
import org.openapis.openapi.models.shared.SoftwareTokenMfaConfigType;
import org.openapis.openapi.models.shared.UserPoolMfaTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetUserPoolMfaConfigRequest req = new SetUserPoolMfaConfigRequest(                new SetUserPoolMfaConfigRequest("officiis") {{
                                mfaConfiguration = UserPoolMfaTypeEnum.OFF;
                                smsMfaConfiguration = new SmsMfaConfigType() {{
                                    smsAuthenticationMessage = "fuga";
                                    smsConfiguration = new SmsConfigurationType("pariatur") {{
                                        externalId = "debitis";
                                        snsRegion = "voluptatem";
                                    }};;
                                }};;
                                softwareTokenMfaConfiguration = new SoftwareTokenMfaConfigType() {{
                                    enabled = false;
                                }};;
                            }};, SetUserPoolMfaConfigXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_POOL_MFA_CONFIG) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "earum";
                xAmzDate = "ex";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "minus";
            }};            

            SetUserPoolMfaConfigResponse res = sdk.sdk.setUserPoolMfaConfig(req);

            if (res.setUserPoolMfaConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetUserSettingsRequest;
import org.openapis.openapi.models.operations.SetUserSettingsResponse;
import org.openapis.openapi.models.operations.SetUserSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeliveryMediumTypeEnum;
import org.openapis.openapi.models.shared.MFAOptionType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetUserSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetUserSettingsRequest req = new SetUserSettingsRequest(                new SetUserSettingsRequest("asperiores",                 new org.openapis.openapi.models.shared.MFAOptionType[]{{
                                                add(new MFAOptionType() {{
                                                    attributeName = "ullam";
                                                    deliveryMedium = DeliveryMediumTypeEnum.SMS;
                                                }}),
                                            }});, SetUserSettingsXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_SETTINGS) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "impedit";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "culpa";
            }};            

            SetUserSettingsResponse res = sdk.sdk.setUserSettings(req);

            if (res.setUserSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signUp

<p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignUpRequest;
import org.openapis.openapi.models.operations.SignUpResponse;
import org.openapis.openapi.models.operations.SignUpXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsMetadataType;
import org.openapis.openapi.models.shared.AttributeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignUpRequest;
import org.openapis.openapi.models.shared.UserContextDataType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SignUpRequest req = new SignUpRequest(                new SignUpRequest("aliquam", "inventore", "deleniti") {{
                                analyticsMetadata = new AnalyticsMetadataType() {{
                                    analyticsEndpointId = "veritatis";
                                }};;
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("dolor", "consequatur");
                                    put("architecto", "sit");
                                }};
                                secretHash = "modi";
                                userAttributes = new org.openapis.openapi.models.shared.AttributeType[]{{
                                    add(new AttributeType("consequuntur") {{
                                        name = "Marsha Bergstrom";
                                        value = "ipsam";
                                    }}),
                                }};
                                userContextData = new UserContextDataType() {{
                                    encodedData = "ipsa";
                                    ipAddress = "quas";
                                }};;
                                validationData = new org.openapis.openapi.models.shared.AttributeType[]{{
                                    add(new AttributeType("nesciunt") {{
                                        name = "Erick Klocko";
                                        value = "veniam";
                                    }}),
                                    add(new AttributeType("ab") {{
                                        name = "Andre Kautzer";
                                        value = "exercitationem";
                                    }}),
                                    add(new AttributeType("voluptatem") {{
                                        name = "Raul Rolfson";
                                        value = "consequuntur";
                                    }}),
                                    add(new AttributeType("est") {{
                                        name = "Alyssa Boyer";
                                        value = "vero";
                                    }}),
                                }};
                            }};, SignUpXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SIGN_UP) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "doloribus";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "optio";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "nemo";
            }};            

            SignUpResponse res = sdk.sdk.signUp(req);

            if (res.signUpResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startUserImportJob

Starts the user import.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartUserImportJobRequest;
import org.openapis.openapi.models.operations.StartUserImportJobResponse;
import org.openapis.openapi.models.operations.StartUserImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartUserImportJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartUserImportJobRequest req = new StartUserImportJobRequest(                new StartUserImportJobRequest("blanditiis", "officia");, StartUserImportJobXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_START_USER_IMPORT_JOB) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "nemo";
                xAmzDate = "quos";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "ducimus";
            }};            

            StartUserImportJobResponse res = sdk.sdk.startUserImportJob(req);

            if (res.startUserImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopUserImportJob

Stops the user import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopUserImportJobRequest;
import org.openapis.openapi.models.operations.StopUserImportJobResponse;
import org.openapis.openapi.models.operations.StopUserImportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopUserImportJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopUserImportJobRequest req = new StopUserImportJobRequest(                new StopUserImportJobRequest("fuga", "laudantium");, StopUserImportJobXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_STOP_USER_IMPORT_JOB) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "rem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "consequuntur";
            }};            

            StopUserImportJobResponse res = sdk.sdk.stopUserImportJob(req);

            if (res.stopUserImportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("aperiam",                 new java.util.HashMap<String, String>() {{
                                                put("reiciendis", "soluta");
                                                put("alias", "omnis");
                                                put("eos", "occaecati");
                                            }});, TagResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "magni";
                xAmzCredential = "inventore";
                xAmzDate = "fuga";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("delectus",                 new String[]{{
                                                add("praesentium"),
                                                add("maxime"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "quos";
                xAmzDate = "commodi";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "totam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAuthEventFeedback

Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAuthEventFeedbackRequest;
import org.openapis.openapi.models.operations.UpdateAuthEventFeedbackResponse;
import org.openapis.openapi.models.operations.UpdateAuthEventFeedbackXAmzTargetEnum;
import org.openapis.openapi.models.shared.FeedbackValueTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAuthEventFeedbackRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAuthEventFeedbackRequest req = new UpdateAuthEventFeedbackRequest(                new UpdateAuthEventFeedbackRequest("modi", "nam", FeedbackValueTypeEnum.INVALID, "voluptatem", "ipsam");, UpdateAuthEventFeedbackXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_AUTH_EVENT_FEEDBACK) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "alias";
                xAmzCredential = "quasi";
                xAmzDate = "non";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "sint";
            }};            

            UpdateAuthEventFeedbackResponse res = sdk.sdk.updateAuthEventFeedback(req);

            if (res.updateAuthEventFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceStatus

Updates the device status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceStatusRequest;
import org.openapis.openapi.models.operations.UpdateDeviceStatusResponse;
import org.openapis.openapi.models.operations.UpdateDeviceStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeviceRememberedStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDeviceStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDeviceStatusRequest req = new UpdateDeviceStatusRequest(                new UpdateDeviceStatusRequest("deserunt", "esse") {{
                                deviceRememberedStatus = DeviceRememberedStatusTypeEnum.REMEMBERED;
                            }};, UpdateDeviceStatusXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_DEVICE_STATUS) {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "est";
                xAmzCredential = "quis";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateDeviceStatusResponse res = sdk.sdk.updateDeviceStatus(req);

            if (res.updateDeviceStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGroup

<p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGroupRequest;
import org.openapis.openapi.models.operations.UpdateGroupResponse;
import org.openapis.openapi.models.operations.UpdateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateGroupRequest req = new UpdateGroupRequest(                new UpdateGroupRequest("asperiores", "ex") {{
                                description = "voluptas";
                                precedence = 895346L;
                                roleArn = "delectus";
                            }};, UpdateGroupXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_GROUP) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "fuga";
                xAmzDate = "laborum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "atque";
            }};            

            UpdateGroupResponse res = sdk.sdk.updateGroup(req);

            if (res.updateGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIdentityProvider

Updates IdP information for a user pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdentityProviderRequest;
import org.openapis.openapi.models.operations.UpdateIdentityProviderResponse;
import org.openapis.openapi.models.operations.UpdateIdentityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateIdentityProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateIdentityProviderRequest req = new UpdateIdentityProviderRequest(                new UpdateIdentityProviderRequest("impedit", "magni") {{
                                attributeMapping = new java.util.HashMap<String, String>() {{
                                    put("repudiandae", "nam");
                                    put("dolore", "iusto");
                                    put("voluptate", "sequi");
                                }};
                                idpIdentifiers = new String[]{{
                                    add("neque"),
                                    add("quo"),
                                }};
                                providerDetails = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "iure");
                                    put("odit", "voluptatibus");
                                    put("vel", "magnam");
                                }};
                            }};, UpdateIdentityProviderXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_IDENTITY_PROVIDER) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "facere";
                xAmzDate = "libero";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "quia";
            }};            

            UpdateIdentityProviderResponse res = sdk.sdk.updateIdentityProvider(req);

            if (res.updateIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceServer

<p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceServerRequest;
import org.openapis.openapi.models.operations.UpdateResourceServerResponse;
import org.openapis.openapi.models.operations.UpdateResourceServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResourceServerScopeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResourceServerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceServerRequest req = new UpdateResourceServerRequest(                new UpdateResourceServerRequest("aliquam", "velit", "illo") {{
                                scopes = new org.openapis.openapi.models.shared.ResourceServerScopeType[]{{
                                    add(new ResourceServerScopeType("beatae", "vero") {{
                                        scopeDescription = "vel";
                                        scopeName = "ea";
                                    }}),
                                }};
                            }};, UpdateResourceServerXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_RESOURCE_SERVER) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "eum";
                xAmzCredential = "velit";
                xAmzDate = "ut";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateResourceServerResponse res = sdk.sdk.updateResourceServer(req);

            if (res.updateResourceServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserAttributes

<p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserAttributesRequest;
import org.openapis.openapi.models.operations.UpdateUserAttributesResponse;
import org.openapis.openapi.models.operations.UpdateUserAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttributeType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserAttributesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserAttributesRequest req = new UpdateUserAttributesRequest(                new UpdateUserAttributesRequest("voluptatibus",                 new org.openapis.openapi.models.shared.AttributeType[]{{
                                                add(new AttributeType("non") {{
                                                    name = "John Huel";
                                                    value = "laborum";
                                                }}),
                                                add(new AttributeType("ea") {{
                                                    name = "Mr. Glenda Bailey";
                                                    value = "recusandae";
                                                }}),
                                                add(new AttributeType("deleniti") {{
                                                    name = "Hector Purdy";
                                                    value = "expedita";
                                                }}),
                                            }}) {{
                                clientMetadata = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "ullam");
                                    put("unde", "necessitatibus");
                                    put("animi", "impedit");
                                    put("ipsam", "corporis");
                                }};
                            }};, UpdateUserAttributesXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_ATTRIBUTES) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "error";
                xAmzCredential = "esse";
                xAmzDate = "labore";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "consectetur";
            }};            

            UpdateUserAttributesResponse res = sdk.sdk.updateUserAttributes(req);

            if (res.updateUserAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserPool

<p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserPoolRequest;
import org.openapis.openapi.models.operations.UpdateUserPoolResponse;
import org.openapis.openapi.models.operations.UpdateUserPoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountRecoverySettingType;
import org.openapis.openapi.models.shared.AdminCreateUserConfigType;
import org.openapis.openapi.models.shared.AdvancedSecurityModeTypeEnum;
import org.openapis.openapi.models.shared.CustomEmailLambdaVersionConfigType;
import org.openapis.openapi.models.shared.CustomEmailSenderLambdaVersionTypeEnum;
import org.openapis.openapi.models.shared.CustomSMSLambdaVersionConfigType;
import org.openapis.openapi.models.shared.CustomSMSSenderLambdaVersionTypeEnum;
import org.openapis.openapi.models.shared.DefaultEmailOptionTypeEnum;
import org.openapis.openapi.models.shared.DeletionProtectionTypeEnum;
import org.openapis.openapi.models.shared.DeviceConfigurationType;
import org.openapis.openapi.models.shared.EmailConfigurationType;
import org.openapis.openapi.models.shared.EmailSendingAccountTypeEnum;
import org.openapis.openapi.models.shared.LambdaConfigType;
import org.openapis.openapi.models.shared.MessageTemplateType;
import org.openapis.openapi.models.shared.PasswordPolicyType;
import org.openapis.openapi.models.shared.RecoveryOptionNameTypeEnum;
import org.openapis.openapi.models.shared.RecoveryOptionType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmsConfigurationType;
import org.openapis.openapi.models.shared.UpdateUserPoolRequest;
import org.openapis.openapi.models.shared.UserAttributeUpdateSettingsType;
import org.openapis.openapi.models.shared.UserPoolAddOnsType;
import org.openapis.openapi.models.shared.UserPoolMfaTypeEnum;
import org.openapis.openapi.models.shared.UserPoolPolicyType;
import org.openapis.openapi.models.shared.VerificationMessageTemplateType;
import org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserPoolRequest req = new UpdateUserPoolRequest(                new UpdateUserPoolRequest("inventore") {{
                                accountRecoverySetting = new AccountRecoverySettingType() {{
                                    recoveryMechanisms = new org.openapis.openapi.models.shared.RecoveryOptionType[]{{
                                        add(new RecoveryOptionType(RecoveryOptionNameTypeEnum.VERIFIED_PHONE_NUMBER, 403026L) {{
                                            name = RecoveryOptionNameTypeEnum.VERIFIED_EMAIL;
                                            priority = 183033L;
                                        }}),
                                    }};
                                }};;
                                adminCreateUserConfig = new AdminCreateUserConfigType() {{
                                    allowAdminCreateUserOnly = false;
                                    inviteMessageTemplate = new MessageTemplateType() {{
                                        emailMessage = "nemo";
                                        emailSubject = "soluta";
                                        smsMessage = "libero";
                                    }};;
                                    unusedAccountValidityDays = 526907L;
                                }};;
                                autoVerifiedAttributes = new org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum[]{{
                                    add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                    add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                    add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                }};
                                deletionProtection = DeletionProtectionTypeEnum.ACTIVE;
                                deviceConfiguration = new DeviceConfigurationType() {{
                                    challengeRequiredOnNewDevice = false;
                                    deviceOnlyRememberedOnUserPrompt = false;
                                }};;
                                emailConfiguration = new EmailConfigurationType() {{
                                    configurationSet = "vel";
                                    emailSendingAccount = EmailSendingAccountTypeEnum.COGNITO_DEFAULT;
                                    from = "quae";
                                    replyToEmailAddress = "modi";
                                    sourceArn = "neque";
                                }};;
                                emailVerificationMessage = "exercitationem";
                                emailVerificationSubject = "itaque";
                                lambdaConfig = new LambdaConfigType() {{
                                    createAuthChallenge = "et";
                                    customEmailSender = new CustomEmailLambdaVersionConfigType("ipsum", CustomEmailSenderLambdaVersionTypeEnum.V10);;
                                    customMessage = "unde";
                                    customSMSSender = new CustomSMSLambdaVersionConfigType("nulla", CustomSMSSenderLambdaVersionTypeEnum.V10);;
                                    defineAuthChallenge = "distinctio";
                                    kmsKeyID = "maxime";
                                    postAuthentication = "quia";
                                    postConfirmation = "quia";
                                    preAuthentication = "nostrum";
                                    preSignUp = "omnis";
                                    preTokenGeneration = "libero";
                                    userMigration = "dicta";
                                    verifyAuthChallengeResponse = "id";
                                }};;
                                mfaConfiguration = UserPoolMfaTypeEnum.OPTIONAL;
                                policies = new UserPoolPolicyType() {{
                                    passwordPolicy = new PasswordPolicyType() {{
                                        minimumLength = 854460L;
                                        requireLowercase = false;
                                        requireNumbers = false;
                                        requireSymbols = false;
                                        requireUppercase = false;
                                        temporaryPasswordValidityDays = 637462L;
                                    }};;
                                }};;
                                smsAuthenticationMessage = "quos";
                                smsConfiguration = new SmsConfigurationType("placeat") {{
                                    externalId = "sit";
                                    snsRegion = "iusto";
                                }};;
                                smsVerificationMessage = "ipsa";
                                userAttributeUpdateSettings = new UserAttributeUpdateSettingsType() {{
                                    attributesRequireVerificationBeforeUpdate = new org.openapis.openapi.models.shared.VerifiedAttributeTypeEnum[]{{
                                        add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                        add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                        add(VerifiedAttributeTypeEnum.EMAIL),
                                        add(VerifiedAttributeTypeEnum.PHONE_NUMBER),
                                    }};
                                }};;
                                userPoolAddOns = new UserPoolAddOnsType(AdvancedSecurityModeTypeEnum.ENFORCED);;
                                userPoolTags = new java.util.HashMap<String, String>() {{
                                    put("voluptatem", "autem");
                                    put("esse", "dolores");
                                    put("assumenda", "beatae");
                                }};
                                verificationMessageTemplate = new VerificationMessageTemplateType() {{
                                    defaultEmailOption = DefaultEmailOptionTypeEnum.CONFIRM_WITH_CODE;
                                    emailMessage = "facere";
                                    emailMessageByLink = "corrupti";
                                    emailSubject = "molestiae";
                                    emailSubjectByLink = "provident";
                                    smsMessage = "accusamus";
                                }};;
                            }};, UpdateUserPoolXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "sint";
                xAmzDate = "ea";
                xAmzSecurityToken = "autem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "rerum";
            }};            

            UpdateUserPoolResponse res = sdk.sdk.updateUserPool(req);

            if (res.updateUserPoolResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserPoolClient

<p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserPoolClientRequest;
import org.openapis.openapi.models.operations.UpdateUserPoolClientResponse;
import org.openapis.openapi.models.operations.UpdateUserPoolClientXAmzTargetEnum;
import org.openapis.openapi.models.shared.AnalyticsConfigurationType;
import org.openapis.openapi.models.shared.ExplicitAuthFlowsTypeEnum;
import org.openapis.openapi.models.shared.OAuthFlowTypeEnum;
import org.openapis.openapi.models.shared.PreventUserExistenceErrorTypesEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeUnitsTypeEnum;
import org.openapis.openapi.models.shared.TokenValidityUnitsType;
import org.openapis.openapi.models.shared.UpdateUserPoolClientRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserPoolClientRequest req = new UpdateUserPoolClientRequest(                new UpdateUserPoolClientRequest("corporis", "officiis") {{
                                accessTokenValidity = 972912L;
                                allowedOAuthFlows = new org.openapis.openapi.models.shared.OAuthFlowTypeEnum[]{{
                                    add(OAuthFlowTypeEnum.CLIENT_CREDENTIALS),
                                    add(OAuthFlowTypeEnum.CODE),
                                    add(OAuthFlowTypeEnum.CODE),
                                }};
                                allowedOAuthFlowsUserPoolClient = false;
                                allowedOAuthScopes = new String[]{{
                                    add("fuga"),
                                    add("repudiandae"),
                                    add("accusantium"),
                                }};
                                analyticsConfiguration = new AnalyticsConfigurationType() {{
                                    applicationArn = "expedita";
                                    applicationId = "officiis";
                                    externalId = "eos";
                                    roleArn = "quibusdam";
                                    userDataShared = false;
                                }};;
                                authSessionValidity = 483518L;
                                callbackURLs = new String[]{{
                                    add("odit"),
                                    add("explicabo"),
                                    add("corporis"),
                                }};
                                clientName = "error";
                                defaultRedirectURI = "earum";
                                enablePropagateAdditionalUserContextData = false;
                                enableTokenRevocation = false;
                                explicitAuthFlows = new org.openapis.openapi.models.shared.ExplicitAuthFlowsTypeEnum[]{{
                                    add(ExplicitAuthFlowsTypeEnum.ALLOW_REFRESH_TOKEN_AUTH),
                                }};
                                idTokenValidity = 630871L;
                                logoutURLs = new String[]{{
                                    add("quidem"),
                                    add("quis"),
                                }};
                                preventUserExistenceErrors = PreventUserExistenceErrorTypesEnum.LEGACY;
                                readAttributes = new String[]{{
                                    add("molestiae"),
                                    add("delectus"),
                                    add("cupiditate"),
                                }};
                                refreshTokenValidity = 147801L;
                                supportedIdentityProviders = new String[]{{
                                    add("numquam"),
                                    add("nesciunt"),
                                }};
                                tokenValidityUnits = new TokenValidityUnitsType() {{
                                    accessToken = TimeUnitsTypeEnum.DAYS;
                                    idToken = TimeUnitsTypeEnum.HOURS;
                                    refreshToken = TimeUnitsTypeEnum.MINUTES;
                                }};;
                                writeAttributes = new String[]{{
                                    add("necessitatibus"),
                                    add("corporis"),
                                    add("qui"),
                                    add("expedita"),
                                }};
                            }};, UpdateUserPoolClientXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL_CLIENT) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "minima";
                xAmzDate = "placeat";
                xAmzSecurityToken = "enim";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "in";
            }};            

            UpdateUserPoolClientResponse res = sdk.sdk.updateUserPoolClient(req);

            if (res.updateUserPoolClientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserPoolDomain

<p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserPoolDomainRequest;
import org.openapis.openapi.models.operations.UpdateUserPoolDomainResponse;
import org.openapis.openapi.models.operations.UpdateUserPoolDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomDomainConfigType;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserPoolDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserPoolDomainRequest req = new UpdateUserPoolDomainRequest(                new UpdateUserPoolDomainRequest(                new CustomDomainConfigType("eum");, "modi", "corporis");, UpdateUserPoolDomainXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL_DOMAIN) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "maiores";
                xAmzDate = "tempore";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "ratione";
            }};            

            UpdateUserPoolDomainResponse res = sdk.sdk.updateUserPoolDomain(req);

            if (res.updateUserPoolDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySoftwareToken

Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySoftwareTokenRequest;
import org.openapis.openapi.models.operations.VerifySoftwareTokenResponse;
import org.openapis.openapi.models.operations.VerifySoftwareTokenXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifySoftwareTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            VerifySoftwareTokenRequest req = new VerifySoftwareTokenRequest(                new VerifySoftwareTokenRequest("totam") {{
                                accessToken = "occaecati";
                                friendlyDeviceName = "voluptas";
                                session = "quo";
                            }};, VerifySoftwareTokenXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_VERIFY_SOFTWARE_TOKEN) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "minus";
                xAmzCredential = "fuga";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "est";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "delectus";
            }};            

            VerifySoftwareTokenResponse res = sdk.sdk.verifySoftwareToken(req);

            if (res.verifySoftwareTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifyUserAttribute

<p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyUserAttributeRequest;
import org.openapis.openapi.models.operations.VerifyUserAttributeResponse;
import org.openapis.openapi.models.operations.VerifyUserAttributeXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyUserAttributeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            VerifyUserAttributeRequest req = new VerifyUserAttributeRequest(                new VerifyUserAttributeRequest("vero", "odit", "repellat");, VerifyUserAttributeXAmzTargetEnum.AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_VERIFY_USER_ATTRIBUTE) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "reprehenderit";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "in";
            }};            

            VerifyUserAttributeResponse res = sdk.sdk.verifyUserAttribute(req);

            if (res.verifyUserAttributeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
