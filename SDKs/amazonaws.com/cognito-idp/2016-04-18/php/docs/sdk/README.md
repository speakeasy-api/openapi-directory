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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttributeType;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Shared\StringAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomAttributesRequest();
    $request->addCustomAttributesRequest = new AddCustomAttributesRequest();
    $request->addCustomAttributesRequest->customAttributes = [
        new SchemaAttributeType(),
        new SchemaAttributeType(),
        new SchemaAttributeType(),
    ];
    $request->addCustomAttributesRequest->userPoolId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AddCustomAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADD_CUSTOM_ATTRIBUTES;

    $response = $sdk->sdk->addCustomAttributes($request);

    if ($response->addCustomAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminAddUserToGroup

<p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminAddUserToGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminAddUserToGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminAddUserToGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminAddUserToGroupRequest();
    $request->adminAddUserToGroupRequest = new AdminAddUserToGroupRequest();
    $request->adminAddUserToGroupRequest->groupName = 'suscipit';
    $request->adminAddUserToGroupRequest->userPoolId = 'molestiae';
    $request->adminAddUserToGroupRequest->username = 'minus';
    $request->xAmzAlgorithm = 'placeat';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = AdminAddUserToGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_ADD_USER_TO_GROUP;

    $response = $sdk->sdk->adminAddUserToGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminConfirmSignUp

<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminConfirmSignUpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminConfirmSignUpRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminConfirmSignUpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminConfirmSignUpRequest();
    $request->adminConfirmSignUpRequest = new AdminConfirmSignUpRequest();
    $request->adminConfirmSignUpRequest->clientMetadata = [
        'quis' => 'veritatis',
    ];
    $request->adminConfirmSignUpRequest->userPoolId = 'deserunt';
    $request->adminConfirmSignUpRequest->username = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AdminConfirmSignUpXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_CONFIRM_SIGN_UP;

    $response = $sdk->sdk->adminConfirmSignUp($request);

    if ($response->adminConfirmSignUpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminCreateUser

<p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminCreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryMediumTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttributeType;
use \OpenAPI\OpenAPI\Models\Operations\AdminCreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminCreateUserRequest();
    $request->adminCreateUserRequest = new AdminCreateUserRequest();
    $request->adminCreateUserRequest->clientMetadata = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->adminCreateUserRequest->desiredDeliveryMediums = [
        DeliveryMediumTypeEnum::EMAIL,
        DeliveryMediumTypeEnum::EMAIL,
        DeliveryMediumTypeEnum::SMS,
    ];
    $request->adminCreateUserRequest->forceAliasCreation = false;
    $request->adminCreateUserRequest->messageAction = MessageActionTypeEnum::SUPPRESS;
    $request->adminCreateUserRequest->temporaryPassword = 'hic';
    $request->adminCreateUserRequest->userAttributes = [
        new AttributeType(),
        new AttributeType(),
        new AttributeType(),
        new AttributeType(),
    ];
    $request->adminCreateUserRequest->userPoolId = 'totam';
    $request->adminCreateUserRequest->username = 'beatae';
    $request->adminCreateUserRequest->validationData = [
        new AttributeType(),
        new AttributeType(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = AdminCreateUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_CREATE_USER;

    $response = $sdk->sdk->adminCreateUser($request);

    if ($response->adminCreateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminDeleteUser

<p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminDeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminDeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminDeleteUserRequest();
    $request->adminDeleteUserRequest = new AdminDeleteUserRequest();
    $request->adminDeleteUserRequest->userPoolId = 'excepturi';
    $request->adminDeleteUserRequest->username = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = AdminDeleteUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DELETE_USER;

    $response = $sdk->sdk->adminDeleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminDeleteUserAttributes

<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminDeleteUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminDeleteUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminDeleteUserAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminDeleteUserAttributesRequest();
    $request->adminDeleteUserAttributesRequest = new AdminDeleteUserAttributesRequest();
    $request->adminDeleteUserAttributesRequest->userAttributeNames = [
        'hic',
        'saepe',
    ];
    $request->adminDeleteUserAttributesRequest->userPoolId = 'fuga';
    $request->adminDeleteUserAttributesRequest->username = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AdminDeleteUserAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DELETE_USER_ATTRIBUTES;

    $response = $sdk->sdk->adminDeleteUserAttributes($request);

    if ($response->adminDeleteUserAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminDisableProviderForUser

<p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminDisableProviderForUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminDisableProviderForUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProviderUserIdentifierType;
use \OpenAPI\OpenAPI\Models\Operations\AdminDisableProviderForUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminDisableProviderForUserRequest();
    $request->adminDisableProviderForUserRequest = new AdminDisableProviderForUserRequest();
    $request->adminDisableProviderForUserRequest->user = new ProviderUserIdentifierType();
    $request->adminDisableProviderForUserRequest->user->providerAttributeName = 'reiciendis';
    $request->adminDisableProviderForUserRequest->user->providerAttributeValue = 'est';
    $request->adminDisableProviderForUserRequest->user->providerName = 'mollitia';
    $request->adminDisableProviderForUserRequest->userPoolId = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = AdminDisableProviderForUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DISABLE_PROVIDER_FOR_USER;

    $response = $sdk->sdk->adminDisableProviderForUser($request);

    if ($response->adminDisableProviderForUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminDisableUser

<p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminDisableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminDisableUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminDisableUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminDisableUserRequest();
    $request->adminDisableUserRequest = new AdminDisableUserRequest();
    $request->adminDisableUserRequest->userPoolId = 'nemo';
    $request->adminDisableUserRequest->username = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = AdminDisableUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_DISABLE_USER;

    $response = $sdk->sdk->adminDisableUser($request);

    if ($response->adminDisableUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminEnableUser

<p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminEnableUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminEnableUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminEnableUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminEnableUserRequest();
    $request->adminEnableUserRequest = new AdminEnableUserRequest();
    $request->adminEnableUserRequest->userPoolId = 'mollitia';
    $request->adminEnableUserRequest->username = 'dolorem';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = AdminEnableUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_ENABLE_USER;

    $response = $sdk->sdk->adminEnableUser($request);

    if ($response->adminEnableUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminForgetDevice

<p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminForgetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminForgetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminForgetDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminForgetDeviceRequest();
    $request->adminForgetDeviceRequest = new AdminForgetDeviceRequest();
    $request->adminForgetDeviceRequest->deviceKey = 'quam';
    $request->adminForgetDeviceRequest->userPoolId = 'molestiae';
    $request->adminForgetDeviceRequest->username = 'velit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = AdminForgetDeviceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_FORGET_DEVICE;

    $response = $sdk->sdk->adminForgetDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminGetDevice

<p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminGetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminGetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminGetDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminGetDeviceRequest();
    $request->adminGetDeviceRequest = new AdminGetDeviceRequest();
    $request->adminGetDeviceRequest->deviceKey = 'odit';
    $request->adminGetDeviceRequest->userPoolId = 'quo';
    $request->adminGetDeviceRequest->username = 'sequi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AdminGetDeviceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_GET_DEVICE;

    $response = $sdk->sdk->adminGetDevice($request);

    if ($response->adminGetDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminGetUser

<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminGetUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminGetUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminGetUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminGetUserRequest();
    $request->adminGetUserRequest = new AdminGetUserRequest();
    $request->adminGetUserRequest->userPoolId = 'temporibus';
    $request->adminGetUserRequest->username = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = AdminGetUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_GET_USER;

    $response = $sdk->sdk->adminGetUser($request);

    if ($response->adminGetUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminInitiateAuth

<p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminInitiateAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminInitiateAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\AuthFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContextDataType;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeader;
use \OpenAPI\OpenAPI\Models\Operations\AdminInitiateAuthXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminInitiateAuthRequest();
    $request->adminInitiateAuthRequest = new AdminInitiateAuthRequest();
    $request->adminInitiateAuthRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->adminInitiateAuthRequest->analyticsMetadata->analyticsEndpointId = 'ipsa';
    $request->adminInitiateAuthRequest->authFlow = AuthFlowTypeEnum::ADMIN_NO_SRP_AUTH;
    $request->adminInitiateAuthRequest->authParameters = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->adminInitiateAuthRequest->clientId = 'ut';
    $request->adminInitiateAuthRequest->clientMetadata = [
        'dicta' => 'corporis',
        'dolore' => 'iusto',
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->adminInitiateAuthRequest->contextData = new ContextDataType();
    $request->adminInitiateAuthRequest->contextData->encodedData = 'commodi';
    $request->adminInitiateAuthRequest->contextData->httpHeaders = [
        new HttpHeader(),
        new HttpHeader(),
        new HttpHeader(),
        new HttpHeader(),
    ];
    $request->adminInitiateAuthRequest->contextData->ipAddress = 'quae';
    $request->adminInitiateAuthRequest->contextData->serverName = 'ipsum';
    $request->adminInitiateAuthRequest->contextData->serverPath = 'quidem';
    $request->adminInitiateAuthRequest->userPoolId = 'molestias';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = AdminInitiateAuthXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_INITIATE_AUTH;

    $response = $sdk->sdk->adminInitiateAuth($request);

    if ($response->adminInitiateAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminLinkProviderForUser

<p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is administrative and requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminLinkProviderForUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminLinkProviderForUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProviderUserIdentifierType;
use \OpenAPI\OpenAPI\Models\Operations\AdminLinkProviderForUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminLinkProviderForUserRequest();
    $request->adminLinkProviderForUserRequest = new AdminLinkProviderForUserRequest();
    $request->adminLinkProviderForUserRequest->destinationUser = new ProviderUserIdentifierType();
    $request->adminLinkProviderForUserRequest->destinationUser->providerAttributeName = 'repudiandae';
    $request->adminLinkProviderForUserRequest->destinationUser->providerAttributeValue = 'sint';
    $request->adminLinkProviderForUserRequest->destinationUser->providerName = 'veritatis';
    $request->adminLinkProviderForUserRequest->sourceUser = new ProviderUserIdentifierType();
    $request->adminLinkProviderForUserRequest->sourceUser->providerAttributeName = 'itaque';
    $request->adminLinkProviderForUserRequest->sourceUser->providerAttributeValue = 'incidunt';
    $request->adminLinkProviderForUserRequest->sourceUser->providerName = 'enim';
    $request->adminLinkProviderForUserRequest->userPoolId = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = AdminLinkProviderForUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LINK_PROVIDER_FOR_USER;

    $response = $sdk->sdk->adminLinkProviderForUser($request);

    if ($response->adminLinkProviderForUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminListDevices

<p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminListDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminListDevicesRequest();
    $request->adminListDevicesRequest = new AdminListDevicesRequest();
    $request->adminListDevicesRequest->limit = 264730;
    $request->adminListDevicesRequest->paginationToken = 'qui';
    $request->adminListDevicesRequest->userPoolId = 'aliquid';
    $request->adminListDevicesRequest->username = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = AdminListDevicesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_DEVICES;

    $response = $sdk->sdk->adminListDevices($request);

    if ($response->adminListDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminListGroupsForUser

<p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminListGroupsForUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminListGroupsForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminListGroupsForUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminListGroupsForUserRequest();
    $request->adminListGroupsForUserRequest = new AdminListGroupsForUserRequest();
    $request->adminListGroupsForUserRequest->limit = 677817;
    $request->adminListGroupsForUserRequest->nextToken = 'excepturi';
    $request->adminListGroupsForUserRequest->userPoolId = 'tempora';
    $request->adminListGroupsForUserRequest->username = 'facilis';
    $request->limit = 'tempore';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = AdminListGroupsForUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_GROUPS_FOR_USER;

    $response = $sdk->sdk->adminListGroupsForUser($request);

    if ($response->adminListGroupsForUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminListUserAuthEvents

A history of user activity and any risks detected as part of Amazon Cognito advanced security.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminListUserAuthEventsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminListUserAuthEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminListUserAuthEventsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminListUserAuthEventsRequest();
    $request->adminListUserAuthEventsRequest = new AdminListUserAuthEventsRequest();
    $request->adminListUserAuthEventsRequest->maxResults = 896039;
    $request->adminListUserAuthEventsRequest->nextToken = 'sint';
    $request->adminListUserAuthEventsRequest->userPoolId = 'officia';
    $request->adminListUserAuthEventsRequest->username = 'dolor';
    $request->maxResults = 'debitis';
    $request->nextToken = 'a';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = AdminListUserAuthEventsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_LIST_USER_AUTH_EVENTS;

    $response = $sdk->sdk->adminListUserAuthEvents($request);

    if ($response->adminListUserAuthEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminRemoveUserFromGroup

<p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminRemoveUserFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminRemoveUserFromGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminRemoveUserFromGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminRemoveUserFromGroupRequest();
    $request->adminRemoveUserFromGroupRequest = new AdminRemoveUserFromGroupRequest();
    $request->adminRemoveUserFromGroupRequest->groupName = 'magnam';
    $request->adminRemoveUserFromGroupRequest->userPoolId = 'cumque';
    $request->adminRemoveUserFromGroupRequest->username = 'facere';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = AdminRemoveUserFromGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_REMOVE_USER_FROM_GROUP;

    $response = $sdk->sdk->adminRemoveUserFromGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminResetUserPassword

<p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminResetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminResetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminResetUserPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminResetUserPasswordRequest();
    $request->adminResetUserPasswordRequest = new AdminResetUserPasswordRequest();
    $request->adminResetUserPasswordRequest->clientMetadata = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->adminResetUserPasswordRequest->userPoolId = 'amet';
    $request->adminResetUserPasswordRequest->username = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = AdminResetUserPasswordXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_RESET_USER_PASSWORD;

    $response = $sdk->sdk->adminResetUserPassword($request);

    if ($response->adminResetUserPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminRespondToAuthChallenge

<p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminRespondToAuthChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminRespondToAuthChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeNameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContextDataType;
use \OpenAPI\OpenAPI\Models\Shared\HttpHeader;
use \OpenAPI\OpenAPI\Models\Operations\AdminRespondToAuthChallengeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminRespondToAuthChallengeRequest();
    $request->adminRespondToAuthChallengeRequest = new AdminRespondToAuthChallengeRequest();
    $request->adminRespondToAuthChallengeRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->adminRespondToAuthChallengeRequest->analyticsMetadata->analyticsEndpointId = 'magnam';
    $request->adminRespondToAuthChallengeRequest->challengeName = ChallengeNameTypeEnum::DEVICE_PASSWORD_VERIFIER;
    $request->adminRespondToAuthChallengeRequest->challengeResponses = [
        'labore' => 'labore',
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->adminRespondToAuthChallengeRequest->clientId = 'vero';
    $request->adminRespondToAuthChallengeRequest->clientMetadata = [
        'architecto' => 'magnam',
    ];
    $request->adminRespondToAuthChallengeRequest->contextData = new ContextDataType();
    $request->adminRespondToAuthChallengeRequest->contextData->encodedData = 'et';
    $request->adminRespondToAuthChallengeRequest->contextData->httpHeaders = [
        new HttpHeader(),
        new HttpHeader(),
        new HttpHeader(),
    ];
    $request->adminRespondToAuthChallengeRequest->contextData->ipAddress = 'ullam';
    $request->adminRespondToAuthChallengeRequest->contextData->serverName = 'provident';
    $request->adminRespondToAuthChallengeRequest->contextData->serverPath = 'quos';
    $request->adminRespondToAuthChallengeRequest->session = 'sint';
    $request->adminRespondToAuthChallengeRequest->userPoolId = 'accusantium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = AdminRespondToAuthChallengeXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_RESPOND_TO_AUTH_CHALLENGE;

    $response = $sdk->sdk->adminRespondToAuthChallenge($request);

    if ($response->adminRespondToAuthChallengeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminSetUserMFAPreference

The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserMFAPreferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminSetUserMFAPreferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SMSMfaSettingsType;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareTokenMfaSettingsType;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserMFAPreferenceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminSetUserMFAPreferenceRequest();
    $request->adminSetUserMFAPreferenceRequest = new AdminSetUserMFAPreferenceRequest();
    $request->adminSetUserMFAPreferenceRequest->smsMfaSettings = new SMSMfaSettingsType();
    $request->adminSetUserMFAPreferenceRequest->smsMfaSettings->enabled = false;
    $request->adminSetUserMFAPreferenceRequest->smsMfaSettings->preferredMfa = false;
    $request->adminSetUserMFAPreferenceRequest->softwareTokenMfaSettings = new SoftwareTokenMfaSettingsType();
    $request->adminSetUserMFAPreferenceRequest->softwareTokenMfaSettings->enabled = false;
    $request->adminSetUserMFAPreferenceRequest->softwareTokenMfaSettings->preferredMfa = false;
    $request->adminSetUserMFAPreferenceRequest->userPoolId = 'odit';
    $request->adminSetUserMFAPreferenceRequest->username = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = AdminSetUserMFAPreferenceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_MFA_PREFERENCE;

    $response = $sdk->sdk->adminSetUserMFAPreference($request);

    if ($response->adminSetUserMFAPreferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminSetUserPassword

<p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminSetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminSetUserPasswordRequest();
    $request->adminSetUserPasswordRequest = new AdminSetUserPasswordRequest();
    $request->adminSetUserPasswordRequest->password = 'facilis';
    $request->adminSetUserPasswordRequest->permanent = false;
    $request->adminSetUserPasswordRequest->userPoolId = 'in';
    $request->adminSetUserPasswordRequest->username = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = AdminSetUserPasswordXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_PASSWORD;

    $response = $sdk->sdk->adminSetUserPassword($request);

    if ($response->adminSetUserPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminSetUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminSetUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MFAOptionType;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryMediumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminSetUserSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminSetUserSettingsRequest();
    $request->adminSetUserSettingsRequest = new AdminSetUserSettingsRequest();
    $request->adminSetUserSettingsRequest->mfaOptions = [
        new MFAOptionType(),
    ];
    $request->adminSetUserSettingsRequest->userPoolId = 'saepe';
    $request->adminSetUserSettingsRequest->username = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = AdminSetUserSettingsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_SET_USER_SETTINGS;

    $response = $sdk->sdk->adminSetUserSettings($request);

    if ($response->adminSetUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminUpdateAuthEventFeedback

Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateAuthEventFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminUpdateAuthEventFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedbackValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateAuthEventFeedbackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminUpdateAuthEventFeedbackRequest();
    $request->adminUpdateAuthEventFeedbackRequest = new AdminUpdateAuthEventFeedbackRequest();
    $request->adminUpdateAuthEventFeedbackRequest->eventId = 'illum';
    $request->adminUpdateAuthEventFeedbackRequest->feedbackValue = FeedbackValueTypeEnum::INVALID;
    $request->adminUpdateAuthEventFeedbackRequest->userPoolId = 'maxime';
    $request->adminUpdateAuthEventFeedbackRequest->username = 'ea';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = AdminUpdateAuthEventFeedbackXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_AUTH_EVENT_FEEDBACK;

    $response = $sdk->sdk->adminUpdateAuthEventFeedback($request);

    if ($response->adminUpdateAuthEventFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminUpdateDeviceStatus

<p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateDeviceStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminUpdateDeviceStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRememberedStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateDeviceStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminUpdateDeviceStatusRequest();
    $request->adminUpdateDeviceStatusRequest = new AdminUpdateDeviceStatusRequest();
    $request->adminUpdateDeviceStatusRequest->deviceKey = 'ipsam';
    $request->adminUpdateDeviceStatusRequest->deviceRememberedStatus = DeviceRememberedStatusTypeEnum::REMEMBERED;
    $request->adminUpdateDeviceStatusRequest->userPoolId = 'autem';
    $request->adminUpdateDeviceStatusRequest->username = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = AdminUpdateDeviceStatusXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_DEVICE_STATUS;

    $response = $sdk->sdk->adminUpdateDeviceStatus($request);

    if ($response->adminUpdateDeviceStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminUpdateUserAttributes

<p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminUpdateUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeType;
use \OpenAPI\OpenAPI\Models\Operations\AdminUpdateUserAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminUpdateUserAttributesRequest();
    $request->adminUpdateUserAttributesRequest = new AdminUpdateUserAttributesRequest();
    $request->adminUpdateUserAttributesRequest->clientMetadata = [
        'cumque' => 'corporis',
    ];
    $request->adminUpdateUserAttributesRequest->userAttributes = [
        new AttributeType(),
        new AttributeType(),
        new AttributeType(),
        new AttributeType(),
    ];
    $request->adminUpdateUserAttributesRequest->userPoolId = 'libero';
    $request->adminUpdateUserAttributesRequest->username = 'nobis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = AdminUpdateUserAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_UPDATE_USER_ATTRIBUTES;

    $response = $sdk->sdk->adminUpdateUserAttributes($request);

    if ($response->adminUpdateUserAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adminUserGlobalSignOut

<p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. The user's current access and ID tokens remain valid until they expire. By default, access and ID tokens expire one hour after they're issued. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdminUserGlobalSignOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminUserGlobalSignOutRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdminUserGlobalSignOutXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdminUserGlobalSignOutRequest();
    $request->adminUserGlobalSignOutRequest = new AdminUserGlobalSignOutRequest();
    $request->adminUserGlobalSignOutRequest->userPoolId = 'eos';
    $request->adminUserGlobalSignOutRequest->username = 'perferendis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = AdminUserGlobalSignOutXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ADMIN_USER_GLOBAL_SIGN_OUT;

    $response = $sdk->sdk->adminUserGlobalSignOut($request);

    if ($response->adminUserGlobalSignOutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateSoftwareToken

<p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSoftwareTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateSoftwareTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSoftwareTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateSoftwareTokenRequest();
    $request->associateSoftwareTokenRequest = new AssociateSoftwareTokenRequest();
    $request->associateSoftwareTokenRequest->accessToken = 'recusandae';
    $request->associateSoftwareTokenRequest->session = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateSoftwareTokenXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ASSOCIATE_SOFTWARE_TOKEN;

    $response = $sdk->sdk->associateSoftwareToken($request);

    if ($response->associateSoftwareTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePassword

Changes the password for a specified user in a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->changePasswordRequest = new ChangePasswordRequest();
    $request->changePasswordRequest->accessToken = 'eaque';
    $request->changePasswordRequest->previousPassword = 'occaecati';
    $request->changePasswordRequest->proposedPassword = 'rerum';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ChangePasswordXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CHANGE_PASSWORD;

    $response = $sdk->sdk->changePassword($request);

    if ($response->changePasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmDevice

Confirms tracking of the device. This API call is the call that begins device tracking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSecretVerifierConfigType;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmDeviceRequest();
    $request->confirmDeviceRequest = new ConfirmDeviceRequest();
    $request->confirmDeviceRequest->accessToken = 'pariatur';
    $request->confirmDeviceRequest->deviceKey = 'provident';
    $request->confirmDeviceRequest->deviceName = 'nobis';
    $request->confirmDeviceRequest->deviceSecretVerifierConfig = new DeviceSecretVerifierConfigType();
    $request->confirmDeviceRequest->deviceSecretVerifierConfig->passwordVerifier = 'libero';
    $request->confirmDeviceRequest->deviceSecretVerifierConfig->salt = 'delectus';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = ConfirmDeviceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_DEVICE;

    $response = $sdk->sdk->confirmDevice($request);

    if ($response->confirmDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmForgotPassword

Allows a user to enter a confirmation code to reset a forgotten password.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmForgotPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmForgotPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmForgotPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmForgotPasswordRequest();
    $request->confirmForgotPasswordRequest = new ConfirmForgotPasswordRequest();
    $request->confirmForgotPasswordRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->confirmForgotPasswordRequest->analyticsMetadata->analyticsEndpointId = 'ipsum';
    $request->confirmForgotPasswordRequest->clientId = 'hic';
    $request->confirmForgotPasswordRequest->clientMetadata = [
        'cum' => 'voluptate',
        'dignissimos' => 'reiciendis',
        'amet' => 'dolorum',
    ];
    $request->confirmForgotPasswordRequest->confirmationCode = 'numquam';
    $request->confirmForgotPasswordRequest->password = 'veritatis';
    $request->confirmForgotPasswordRequest->secretHash = 'ipsa';
    $request->confirmForgotPasswordRequest->userContextData = new UserContextDataType();
    $request->confirmForgotPasswordRequest->userContextData->encodedData = 'ipsa';
    $request->confirmForgotPasswordRequest->userContextData->ipAddress = 'iure';
    $request->confirmForgotPasswordRequest->username = 'odio';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = ConfirmForgotPasswordXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_FORGOT_PASSWORD;

    $response = $sdk->sdk->confirmForgotPassword($request);

    if ($response->confirmForgotPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmSignUp

Confirms registration of a new user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmSignUpRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmSignUpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmSignUpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmSignUpRequest();
    $request->confirmSignUpRequest = new ConfirmSignUpRequest();
    $request->confirmSignUpRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->confirmSignUpRequest->analyticsMetadata->analyticsEndpointId = 'atque';
    $request->confirmSignUpRequest->clientId = 'sit';
    $request->confirmSignUpRequest->clientMetadata = [
        'ab' => 'soluta',
        'dolorum' => 'iusto',
        'voluptate' => 'dolorum',
        'deleniti' => 'omnis',
    ];
    $request->confirmSignUpRequest->confirmationCode = 'necessitatibus';
    $request->confirmSignUpRequest->forceAliasCreation = false;
    $request->confirmSignUpRequest->secretHash = 'distinctio';
    $request->confirmSignUpRequest->userContextData = new UserContextDataType();
    $request->confirmSignUpRequest->userContextData->encodedData = 'asperiores';
    $request->confirmSignUpRequest->userContextData->ipAddress = 'nihil';
    $request->confirmSignUpRequest->username = 'ipsum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ConfirmSignUpXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_SIGN_UP;

    $response = $sdk->sdk->confirmSignUp($request);

    if ($response->confirmSignUpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

<p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->createGroupRequest = new CreateGroupRequest();
    $request->createGroupRequest->description = 'optio';
    $request->createGroupRequest->groupName = 'accusamus';
    $request->createGroupRequest->precedence = 320017;
    $request->createGroupRequest->roleArn = 'saepe';
    $request->createGroupRequest->userPoolId = 'suscipit';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = CreateGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_GROUP;

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIdentityProvider

Creates an IdP for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentityProviderTypeTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIdentityProviderRequest();
    $request->createIdentityProviderRequest = new CreateIdentityProviderRequest();
    $request->createIdentityProviderRequest->attributeMapping = [
        'quaerat' => 'tempora',
        'vel' => 'quod',
        'officiis' => 'qui',
        'dolorum' => 'a',
    ];
    $request->createIdentityProviderRequest->idpIdentifiers = [
        'harum',
        'iusto',
    ];
    $request->createIdentityProviderRequest->providerDetails = [
        'quisquam' => 'tenetur',
    ];
    $request->createIdentityProviderRequest->providerName = 'amet';
    $request->createIdentityProviderRequest->providerType = IdentityProviderTypeTypeEnum::SIGN_IN_WITH_APPLE;
    $request->createIdentityProviderRequest->userPoolId = 'accusamus';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = CreateIdentityProviderXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_IDENTITY_PROVIDER;

    $response = $sdk->sdk->createIdentityProvider($request);

    if ($response->createIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResourceServer

Creates a new OAuth2.0 resource server and defines custom scopes within it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceServerScopeType;
use \OpenAPI\OpenAPI\Models\Operations\CreateResourceServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResourceServerRequest();
    $request->createResourceServerRequest = new CreateResourceServerRequest();
    $request->createResourceServerRequest->identifier = 'expedita';
    $request->createResourceServerRequest->name = 'Jane Kassulke';
    $request->createResourceServerRequest->scopes = [
        new ResourceServerScopeType(),
        new ResourceServerScopeType(),
        new ResourceServerScopeType(),
    ];
    $request->createResourceServerRequest->userPoolId = 'quam';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = CreateResourceServerXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_RESOURCE_SERVER;

    $response = $sdk->sdk->createResourceServer($request);

    if ($response->createResourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserImportJob

Creates the user import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserImportJobRequest();
    $request->createUserImportJobRequest = new CreateUserImportJobRequest();
    $request->createUserImportJobRequest->cloudWatchLogsRoleArn = 'dicta';
    $request->createUserImportJobRequest->jobName = 'laborum';
    $request->createUserImportJobRequest->userPoolId = 'totam';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = CreateUserImportJobXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_IMPORT_JOB;

    $response = $sdk->sdk->createUserImportJob($request);

    if ($response->createUserImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserPool

<p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountRecoverySettingType;
use \OpenAPI\OpenAPI\Models\Shared\RecoveryOptionType;
use \OpenAPI\OpenAPI\Models\Shared\RecoveryOptionNameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateUserConfigType;
use \OpenAPI\OpenAPI\Models\Shared\MessageTemplateType;
use \OpenAPI\OpenAPI\Models\Shared\AliasAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifiedAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeletionProtectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\EmailConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\EmailSendingAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomEmailLambdaVersionConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomEmailSenderLambdaVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomSMSLambdaVersionConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomSMSSenderLambdaVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolMfaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolPolicyType;
use \OpenAPI\OpenAPI\Models\Shared\PasswordPolicyType;
use \OpenAPI\OpenAPI\Models\Shared\SchemaAttributeType;
use \OpenAPI\OpenAPI\Models\Shared\AttributeDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Shared\StringAttributeConstraintsType;
use \OpenAPI\OpenAPI\Models\Shared\SmsConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\UserAttributeUpdateSettingsType;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolAddOnsType;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedSecurityModeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsernameAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsernameConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\VerificationMessageTemplateType;
use \OpenAPI\OpenAPI\Models\Shared\DefaultEmailOptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserPoolRequest();
    $request->createUserPoolRequest = new CreateUserPoolRequest();
    $request->createUserPoolRequest->accountRecoverySetting = new AccountRecoverySettingType();
    $request->createUserPoolRequest->accountRecoverySetting->recoveryMechanisms = [
        new RecoveryOptionType(),
        new RecoveryOptionType(),
        new RecoveryOptionType(),
    ];
    $request->createUserPoolRequest->adminCreateUserConfig = new AdminCreateUserConfigType();
    $request->createUserPoolRequest->adminCreateUserConfig->allowAdminCreateUserOnly = false;
    $request->createUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate = new MessageTemplateType();
    $request->createUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->emailMessage = 'temporibus';
    $request->createUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->emailSubject = 'qui';
    $request->createUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->smsMessage = 'neque';
    $request->createUserPoolRequest->adminCreateUserConfig->unusedAccountValidityDays = 144847;
    $request->createUserPoolRequest->aliasAttributes = [
        AliasAttributeTypeEnum::EMAIL,
    ];
    $request->createUserPoolRequest->autoVerifiedAttributes = [
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
    ];
    $request->createUserPoolRequest->deletionProtection = DeletionProtectionTypeEnum::INACTIVE;
    $request->createUserPoolRequest->deviceConfiguration = new DeviceConfigurationType();
    $request->createUserPoolRequest->deviceConfiguration->challengeRequiredOnNewDevice = false;
    $request->createUserPoolRequest->deviceConfiguration->deviceOnlyRememberedOnUserPrompt = false;
    $request->createUserPoolRequest->emailConfiguration = new EmailConfigurationType();
    $request->createUserPoolRequest->emailConfiguration->configurationSet = 'hic';
    $request->createUserPoolRequest->emailConfiguration->emailSendingAccount = EmailSendingAccountTypeEnum::COGNITO_DEFAULT;
    $request->createUserPoolRequest->emailConfiguration->from = 'cumque';
    $request->createUserPoolRequest->emailConfiguration->replyToEmailAddress = 'soluta';
    $request->createUserPoolRequest->emailConfiguration->sourceArn = 'nobis';
    $request->createUserPoolRequest->emailVerificationMessage = 'et';
    $request->createUserPoolRequest->emailVerificationSubject = 'saepe';
    $request->createUserPoolRequest->lambdaConfig = new LambdaConfigType();
    $request->createUserPoolRequest->lambdaConfig->createAuthChallenge = 'ipsum';
    $request->createUserPoolRequest->lambdaConfig->customEmailSender = new CustomEmailLambdaVersionConfigType();
    $request->createUserPoolRequest->lambdaConfig->customEmailSender->lambdaArn = 'veritatis';
    $request->createUserPoolRequest->lambdaConfig->customEmailSender->lambdaVersion = CustomEmailSenderLambdaVersionTypeEnum::V10;
    $request->createUserPoolRequest->lambdaConfig->customMessage = 'nobis';
    $request->createUserPoolRequest->lambdaConfig->customSMSSender = new CustomSMSLambdaVersionConfigType();
    $request->createUserPoolRequest->lambdaConfig->customSMSSender->lambdaArn = 'quos';
    $request->createUserPoolRequest->lambdaConfig->customSMSSender->lambdaVersion = CustomSMSSenderLambdaVersionTypeEnum::V10;
    $request->createUserPoolRequest->lambdaConfig->defineAuthChallenge = 'tempore';
    $request->createUserPoolRequest->lambdaConfig->kmsKeyID = 'cupiditate';
    $request->createUserPoolRequest->lambdaConfig->postAuthentication = 'aperiam';
    $request->createUserPoolRequest->lambdaConfig->postConfirmation = 'delectus';
    $request->createUserPoolRequest->lambdaConfig->preAuthentication = 'dolorem';
    $request->createUserPoolRequest->lambdaConfig->preSignUp = 'dolore';
    $request->createUserPoolRequest->lambdaConfig->preTokenGeneration = 'labore';
    $request->createUserPoolRequest->lambdaConfig->userMigration = 'adipisci';
    $request->createUserPoolRequest->lambdaConfig->verifyAuthChallengeResponse = 'dolorum';
    $request->createUserPoolRequest->mfaConfiguration = UserPoolMfaTypeEnum::OFF;
    $request->createUserPoolRequest->policies = new UserPoolPolicyType();
    $request->createUserPoolRequest->policies->passwordPolicy = new PasswordPolicyType();
    $request->createUserPoolRequest->policies->passwordPolicy->minimumLength = 63038;
    $request->createUserPoolRequest->policies->passwordPolicy->requireLowercase = false;
    $request->createUserPoolRequest->policies->passwordPolicy->requireNumbers = false;
    $request->createUserPoolRequest->policies->passwordPolicy->requireSymbols = false;
    $request->createUserPoolRequest->policies->passwordPolicy->requireUppercase = false;
    $request->createUserPoolRequest->policies->passwordPolicy->temporaryPasswordValidityDays = 16429;
    $request->createUserPoolRequest->poolName = 'quas';
    $request->createUserPoolRequest->schema = [
        new SchemaAttributeType(),
        new SchemaAttributeType(),
        new SchemaAttributeType(),
        new SchemaAttributeType(),
    ];
    $request->createUserPoolRequest->smsAuthenticationMessage = 'consequatur';
    $request->createUserPoolRequest->smsConfiguration = new SmsConfigurationType();
    $request->createUserPoolRequest->smsConfiguration->externalId = 'est';
    $request->createUserPoolRequest->smsConfiguration->snsCallerArn = 'repellendus';
    $request->createUserPoolRequest->smsConfiguration->snsRegion = 'porro';
    $request->createUserPoolRequest->smsVerificationMessage = 'doloribus';
    $request->createUserPoolRequest->userAttributeUpdateSettings = new UserAttributeUpdateSettingsType();
    $request->createUserPoolRequest->userAttributeUpdateSettings->attributesRequireVerificationBeforeUpdate = [
        VerifiedAttributeTypeEnum::EMAIL,
        VerifiedAttributeTypeEnum::EMAIL,
    ];
    $request->createUserPoolRequest->userPoolAddOns = new UserPoolAddOnsType();
    $request->createUserPoolRequest->userPoolAddOns->advancedSecurityMode = AdvancedSecurityModeTypeEnum::OFF;
    $request->createUserPoolRequest->userPoolTags = [
        'laudantium' => 'odio',
    ];
    $request->createUserPoolRequest->usernameAttributes = [
        UsernameAttributeTypeEnum::EMAIL,
        UsernameAttributeTypeEnum::EMAIL,
        UsernameAttributeTypeEnum::EMAIL,
    ];
    $request->createUserPoolRequest->usernameConfiguration = new UsernameConfigurationType();
    $request->createUserPoolRequest->usernameConfiguration->caseSensitive = false;
    $request->createUserPoolRequest->verificationMessageTemplate = new VerificationMessageTemplateType();
    $request->createUserPoolRequest->verificationMessageTemplate->defaultEmailOption = DefaultEmailOptionTypeEnum::CONFIRM_WITH_CODE;
    $request->createUserPoolRequest->verificationMessageTemplate->emailMessage = 'quis';
    $request->createUserPoolRequest->verificationMessageTemplate->emailMessageByLink = 'ipsum';
    $request->createUserPoolRequest->verificationMessageTemplate->emailSubject = 'delectus';
    $request->createUserPoolRequest->verificationMessageTemplate->emailSubjectByLink = 'voluptate';
    $request->createUserPoolRequest->verificationMessageTemplate->smsMessage = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = CreateUserPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL;

    $response = $sdk->sdk->createUserPool($request);

    if ($response->createUserPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserPoolClient

<p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\OAuthFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\ExplicitAuthFlowsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreventUserExistenceErrorTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TokenValidityUnitsType;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolClientXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserPoolClientRequest();
    $request->createUserPoolClientRequest = new CreateUserPoolClientRequest();
    $request->createUserPoolClientRequest->accessTokenValidity = 630448;
    $request->createUserPoolClientRequest->allowedOAuthFlows = [
        OAuthFlowTypeEnum::CLIENT_CREDENTIALS,
        OAuthFlowTypeEnum::IMPLICIT,
        OAuthFlowTypeEnum::CODE,
    ];
    $request->createUserPoolClientRequest->allowedOAuthFlowsUserPoolClient = false;
    $request->createUserPoolClientRequest->allowedOAuthScopes = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->createUserPoolClientRequest->analyticsConfiguration = new AnalyticsConfigurationType();
    $request->createUserPoolClientRequest->analyticsConfiguration->applicationArn = 'aut';
    $request->createUserPoolClientRequest->analyticsConfiguration->applicationId = 'voluptatibus';
    $request->createUserPoolClientRequest->analyticsConfiguration->externalId = 'exercitationem';
    $request->createUserPoolClientRequest->analyticsConfiguration->roleArn = 'nulla';
    $request->createUserPoolClientRequest->analyticsConfiguration->userDataShared = false;
    $request->createUserPoolClientRequest->authSessionValidity = 148141;
    $request->createUserPoolClientRequest->callbackURLs = [
        'maiores',
        'doloribus',
        'iusto',
        'eligendi',
    ];
    $request->createUserPoolClientRequest->clientName = 'ducimus';
    $request->createUserPoolClientRequest->defaultRedirectURI = 'alias';
    $request->createUserPoolClientRequest->enablePropagateAdditionalUserContextData = false;
    $request->createUserPoolClientRequest->enableTokenRevocation = false;
    $request->createUserPoolClientRequest->explicitAuthFlows = [
        ExplicitAuthFlowsTypeEnum::USER_PASSWORD_AUTH,
        ExplicitAuthFlowsTypeEnum::USER_PASSWORD_AUTH,
        ExplicitAuthFlowsTypeEnum::ALLOW_ADMIN_USER_PASSWORD_AUTH,
    ];
    $request->createUserPoolClientRequest->generateSecret = false;
    $request->createUserPoolClientRequest->idTokenValidity = 136900;
    $request->createUserPoolClientRequest->logoutURLs = [
        'possimus',
        'magnam',
    ];
    $request->createUserPoolClientRequest->preventUserExistenceErrors = PreventUserExistenceErrorTypesEnum::LEGACY;
    $request->createUserPoolClientRequest->readAttributes = [
        'laudantium',
        'dicta',
    ];
    $request->createUserPoolClientRequest->refreshTokenValidity = 224317;
    $request->createUserPoolClientRequest->supportedIdentityProviders = [
        'quasi',
        'ex',
        'nulla',
        'excepturi',
    ];
    $request->createUserPoolClientRequest->tokenValidityUnits = new TokenValidityUnitsType();
    $request->createUserPoolClientRequest->tokenValidityUnits->accessToken = TimeUnitsTypeEnum::DAYS;
    $request->createUserPoolClientRequest->tokenValidityUnits->idToken = TimeUnitsTypeEnum::MINUTES;
    $request->createUserPoolClientRequest->tokenValidityUnits->refreshToken = TimeUnitsTypeEnum::DAYS;
    $request->createUserPoolClientRequest->userPoolId = 'quisquam';
    $request->createUserPoolClientRequest->writeAttributes = [
        'ea',
        'impedit',
        'corporis',
        'veniam',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = CreateUserPoolClientXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL_CLIENT;

    $response = $sdk->sdk->createUserPoolClient($request);

    if ($response->createUserPoolClientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserPoolDomain

Creates a new domain for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomDomainConfigType;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserPoolDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserPoolDomainRequest();
    $request->createUserPoolDomainRequest = new CreateUserPoolDomainRequest();
    $request->createUserPoolDomainRequest->customDomainConfig = new CustomDomainConfigType();
    $request->createUserPoolDomainRequest->customDomainConfig->certificateArn = 'aspernatur';
    $request->createUserPoolDomainRequest->domain = 'minima';
    $request->createUserPoolDomainRequest->userPoolId = 'eaque';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = CreateUserPoolDomainXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CREATE_USER_POOL_DOMAIN;

    $response = $sdk->sdk->createUserPoolDomain($request);

    if ($response->createUserPoolDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

<p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->deleteGroupRequest = new DeleteGroupRequest();
    $request->deleteGroupRequest->groupName = 'fugit';
    $request->deleteGroupRequest->userPoolId = 'accusamus';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = DeleteGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_GROUP;

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIdentityProvider

Deletes an IdP for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIdentityProviderRequest();
    $request->deleteIdentityProviderRequest = new DeleteIdentityProviderRequest();
    $request->deleteIdentityProviderRequest->providerName = 'eum';
    $request->deleteIdentityProviderRequest->userPoolId = 'autem';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteIdentityProviderXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_IDENTITY_PROVIDER;

    $response = $sdk->sdk->deleteIdentityProvider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourceServer

Deletes a resource server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourceServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourceServerRequest();
    $request->deleteResourceServerRequest = new DeleteResourceServerRequest();
    $request->deleteResourceServerRequest->identifier = 'tempora';
    $request->deleteResourceServerRequest->userPoolId = 'numquam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = DeleteResourceServerXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_RESOURCE_SERVER;

    $response = $sdk->sdk->deleteResourceServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

Allows a user to delete himself or herself.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->accessToken = 'esse';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserAttributes

Deletes the attributes for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserAttributesRequest();
    $request->deleteUserAttributesRequest = new DeleteUserAttributesRequest();
    $request->deleteUserAttributesRequest->accessToken = 'eum';
    $request->deleteUserAttributesRequest->userAttributeNames = [
        'assumenda',
        'eos',
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = DeleteUserAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_ATTRIBUTES;

    $response = $sdk->sdk->deleteUserAttributes($request);

    if ($response->deleteUserAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserPool

Deletes the specified Amazon Cognito user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserPoolRequest();
    $request->deleteUserPoolRequest = new DeleteUserPoolRequest();
    $request->deleteUserPoolRequest->userPoolId = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = DeleteUserPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL;

    $response = $sdk->sdk->deleteUserPool($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserPoolClient

Allows the developer to delete the user pool client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolClientXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserPoolClientRequest();
    $request->deleteUserPoolClientRequest = new DeleteUserPoolClientRequest();
    $request->deleteUserPoolClientRequest->clientId = 'cupiditate';
    $request->deleteUserPoolClientRequest->userPoolId = 'consequatur';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = DeleteUserPoolClientXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL_CLIENT;

    $response = $sdk->sdk->deleteUserPoolClient($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserPoolDomain

Deletes a domain for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserPoolDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserPoolDomainRequest();
    $request->deleteUserPoolDomainRequest = new DeleteUserPoolDomainRequest();
    $request->deleteUserPoolDomainRequest->domain = 'recusandae';
    $request->deleteUserPoolDomainRequest->userPoolId = 'aperiam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteUserPoolDomainXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DELETE_USER_POOL_DOMAIN;

    $response = $sdk->sdk->deleteUserPoolDomain($request);

    if ($response->deleteUserPoolDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentityProvider

Gets information about a specific IdP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityProviderRequest();
    $request->describeIdentityProviderRequest = new DescribeIdentityProviderRequest();
    $request->describeIdentityProviderRequest->providerName = 'aliquam';
    $request->describeIdentityProviderRequest->userPoolId = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DescribeIdentityProviderXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_IDENTITY_PROVIDER;

    $response = $sdk->sdk->describeIdentityProvider($request);

    if ($response->describeIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourceServer

Describes a resource server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourceServerRequest();
    $request->describeResourceServerRequest = new DescribeResourceServerRequest();
    $request->describeResourceServerRequest->identifier = 'porro';
    $request->describeResourceServerRequest->userPoolId = 'eum';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeResourceServerXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_RESOURCE_SERVER;

    $response = $sdk->sdk->describeResourceServer($request);

    if ($response->describeResourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRiskConfiguration

Describes the risk configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRiskConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRiskConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRiskConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRiskConfigurationRequest();
    $request->describeRiskConfigurationRequest = new DescribeRiskConfigurationRequest();
    $request->describeRiskConfigurationRequest->clientId = 'incidunt';
    $request->describeRiskConfigurationRequest->userPoolId = 'atque';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = DescribeRiskConfigurationXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_RISK_CONFIGURATION;

    $response = $sdk->sdk->describeRiskConfiguration($request);

    if ($response->describeRiskConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserImportJob

Describes the user import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserImportJobRequest();
    $request->describeUserImportJobRequest = new DescribeUserImportJobRequest();
    $request->describeUserImportJobRequest->jobId = 'explicabo';
    $request->describeUserImportJobRequest->userPoolId = 'saepe';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeUserImportJobXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_IMPORT_JOB;

    $response = $sdk->sdk->describeUserImportJob($request);

    if ($response->describeUserImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserPool

Returns the configuration information and metadata of the specified user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserPoolRequest();
    $request->describeUserPoolRequest = new DescribeUserPoolRequest();
    $request->describeUserPoolRequest->userPoolId = 'esse';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DescribeUserPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL;

    $response = $sdk->sdk->describeUserPool($request);

    if ($response->describeUserPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserPoolClient

Client method for returning the configuration information and metadata of the specified user pool app client.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolClientXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserPoolClientRequest();
    $request->describeUserPoolClientRequest = new DescribeUserPoolClientRequest();
    $request->describeUserPoolClientRequest->clientId = 'harum';
    $request->describeUserPoolClientRequest->userPoolId = 'molestiae';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'eligendi';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = DescribeUserPoolClientXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL_CLIENT;

    $response = $sdk->sdk->describeUserPoolClient($request);

    if ($response->describeUserPoolClientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUserPoolDomain

Gets information about a domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserPoolDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserPoolDomainRequest();
    $request->describeUserPoolDomainRequest = new DescribeUserPoolDomainRequest();
    $request->describeUserPoolDomainRequest->domain = 'tempore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeUserPoolDomainXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_DESCRIBE_USER_POOL_DOMAIN;

    $response = $sdk->sdk->describeUserPoolDomain($request);

    if ($response->describeUserPoolDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forgetDevice

Forgets the specified device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ForgetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ForgetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ForgetDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgetDeviceRequest();
    $request->forgetDeviceRequest = new ForgetDeviceRequest();
    $request->forgetDeviceRequest->accessToken = 'consectetur';
    $request->forgetDeviceRequest->deviceKey = 'esse';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = ForgetDeviceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_FORGET_DEVICE;

    $response = $sdk->sdk->forgetDevice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forgotPassword

<p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ForgotPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ForgotPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\ForgotPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForgotPasswordRequest();
    $request->forgotPasswordRequest = new ForgotPasswordRequest();
    $request->forgotPasswordRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->forgotPasswordRequest->analyticsMetadata->analyticsEndpointId = 'a';
    $request->forgotPasswordRequest->clientId = 'error';
    $request->forgotPasswordRequest->clientMetadata = [
        'pariatur' => 'possimus',
        'quia' => 'eveniet',
        'asperiores' => 'facere',
    ];
    $request->forgotPasswordRequest->secretHash = 'veritatis';
    $request->forgotPasswordRequest->userContextData = new UserContextDataType();
    $request->forgotPasswordRequest->userContextData->encodedData = 'consequuntur';
    $request->forgotPasswordRequest->userContextData->ipAddress = 'quasi';
    $request->forgotPasswordRequest->username = 'similique';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ForgotPasswordXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_FORGOT_PASSWORD;

    $response = $sdk->sdk->forgotPassword($request);

    if ($response->forgotPasswordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCSVHeader

Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCSVHeaderRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCSVHeaderRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCSVHeaderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCSVHeaderRequest();
    $request->getCSVHeaderRequest = new GetCSVHeaderRequest();
    $request->getCSVHeaderRequest->userPoolId = 'eius';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'aliquam';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetCSVHeaderXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_CSV_HEADER;

    $response = $sdk->sdk->getCSVHeader($request);

    if ($response->getCSVHeaderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

Gets the device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->getDeviceRequest = new GetDeviceRequest();
    $request->getDeviceRequest->accessToken = 'ullam';
    $request->getDeviceRequest->deviceKey = 'reprehenderit';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = GetDeviceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_DEVICE;

    $response = $sdk->sdk->getDevice($request);

    if ($response->getDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroup

<p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->getGroupRequest = new GetGroupRequest();
    $request->getGroupRequest->groupName = 'deleniti';
    $request->getGroupRequest->userPoolId = 'itaque';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = GetGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_GROUP;

    $response = $sdk->sdk->getGroup($request);

    if ($response->getGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdentityProviderByIdentifier

Gets the specified IdP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityProviderByIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetIdentityProviderByIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityProviderByIdentifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentityProviderByIdentifierRequest();
    $request->getIdentityProviderByIdentifierRequest = new GetIdentityProviderByIdentifierRequest();
    $request->getIdentityProviderByIdentifierRequest->idpIdentifier = 'voluptate';
    $request->getIdentityProviderByIdentifierRequest->userPoolId = 'ipsa';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = GetIdentityProviderByIdentifierXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_IDENTITY_PROVIDER_BY_IDENTIFIER;

    $response = $sdk->sdk->getIdentityProviderByIdentifier($request);

    if ($response->getIdentityProviderByIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSigningCertificate

<p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSigningCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSigningCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSigningCertificateRequest();
    $request->getSigningCertificateRequest = new GetSigningCertificateRequest();
    $request->getSigningCertificateRequest->userPoolId = 'rem';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = GetSigningCertificateXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_SIGNING_CERTIFICATE;

    $response = $sdk->sdk->getSigningCertificate($request);

    if ($response->getSigningCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUICustomization

Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUICustomizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUICustomizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUICustomizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUICustomizationRequest();
    $request->getUICustomizationRequest = new GetUICustomizationRequest();
    $request->getUICustomizationRequest->clientId = 'voluptatem';
    $request->getUICustomizationRequest->userPoolId = 'dolor';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = GetUICustomizationXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_UI_CUSTOMIZATION;

    $response = $sdk->sdk->getUICustomization($request);

    if ($response->getUICustomizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUser

Gets the user attributes and metadata for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserRequest();
    $request->getUserRequest = new GetUserRequest();
    $request->getUserRequest->accessToken = 'dicta';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = GetUserXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER;

    $response = $sdk->sdk->getUser($request);

    if ($response->getUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAttributeVerificationCode

<p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAttributeVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserAttributeVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAttributeVerificationCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAttributeVerificationCodeRequest();
    $request->getUserAttributeVerificationCodeRequest = new GetUserAttributeVerificationCodeRequest();
    $request->getUserAttributeVerificationCodeRequest->accessToken = 'ea';
    $request->getUserAttributeVerificationCodeRequest->attributeName = 'quaerat';
    $request->getUserAttributeVerificationCodeRequest->clientMetadata = [
        'repellendus' => 'officia',
    ];
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = GetUserAttributeVerificationCodeXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_ATTRIBUTE_VERIFICATION_CODE;

    $response = $sdk->sdk->getUserAttributeVerificationCode($request);

    if ($response->getUserAttributeVerificationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserPoolMfaConfig

Gets the user pool multi-factor authentication (MFA) configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPoolMfaConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserPoolMfaConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserPoolMfaConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserPoolMfaConfigRequest();
    $request->getUserPoolMfaConfigRequest = new GetUserPoolMfaConfigRequest();
    $request->getUserPoolMfaConfigRequest->userPoolId = 'porro';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = GetUserPoolMfaConfigXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_POOL_MFA_CONFIG;

    $response = $sdk->sdk->getUserPoolMfaConfig($request);

    if ($response->getUserPoolMfaConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## globalSignOut

Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GlobalSignOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSignOutRequest;
use \OpenAPI\OpenAPI\Models\Operations\GlobalSignOutXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalSignOutRequest();
    $request->globalSignOutRequest = new GlobalSignOutRequest();
    $request->globalSignOutRequest->accessToken = 'velit';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->xAmzTarget = GlobalSignOutXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GLOBAL_SIGN_OUT;

    $response = $sdk->sdk->globalSignOut($request);

    if ($response->globalSignOutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## initiateAuth

<p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InitiateAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\InitiateAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\AuthFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\InitiateAuthXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InitiateAuthRequest();
    $request->initiateAuthRequest = new InitiateAuthRequest();
    $request->initiateAuthRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->initiateAuthRequest->analyticsMetadata->analyticsEndpointId = 'quos';
    $request->initiateAuthRequest->authFlow = AuthFlowTypeEnum::REFRESH_TOKEN;
    $request->initiateAuthRequest->authParameters = [
        'possimus' => 'facilis',
        'cum' => 'commodi',
    ];
    $request->initiateAuthRequest->clientId = 'in';
    $request->initiateAuthRequest->clientMetadata = [
        'reiciendis' => 'assumenda',
        'nemo' => 'recusandae',
    ];
    $request->initiateAuthRequest->userContextData = new UserContextDataType();
    $request->initiateAuthRequest->userContextData->encodedData = 'aliquid';
    $request->initiateAuthRequest->userContextData->ipAddress = 'aperiam';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = InitiateAuthXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_INITIATE_AUTH;

    $response = $sdk->sdk->initiateAuth($request);

    if ($response->initiateAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevices

Lists the sign-in devices that Amazon Cognito has registered to the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->listDevicesRequest = new ListDevicesRequest();
    $request->listDevicesRequest->accessToken = 'doloribus';
    $request->listDevicesRequest->limit = 381760;
    $request->listDevicesRequest->paginationToken = 'reiciendis';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = ListDevicesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_DEVICES;

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

<p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->limit = 'non';
    $request->listGroupsRequest = new ListGroupsRequest();
    $request->listGroupsRequest->limit = 228263;
    $request->listGroupsRequest->nextToken = 'beatae';
    $request->listGroupsRequest->userPoolId = 'dignissimos';
    $request->nextToken = 'a';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = ListGroupsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_GROUPS;

    $response = $sdk->sdk->listGroups($request);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityProviders

Lists information about all IdPs for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIdentityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProvidersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityProvidersRequest();
    $request->listIdentityProvidersRequest = new ListIdentityProvidersRequest();
    $request->listIdentityProvidersRequest->maxResults = 730709;
    $request->listIdentityProvidersRequest->nextToken = 'vitae';
    $request->listIdentityProvidersRequest->userPoolId = 'accusamus';
    $request->maxResults = 'similique';
    $request->nextToken = 'tempora';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListIdentityProvidersXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_IDENTITY_PROVIDERS;

    $response = $sdk->sdk->listIdentityProviders($request);

    if ($response->listIdentityProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceServers

Lists the resource servers for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceServersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceServersRequest();
    $request->listResourceServersRequest = new ListResourceServersRequest();
    $request->listResourceServersRequest->maxResults = 237807;
    $request->listResourceServersRequest->nextToken = 'minus';
    $request->listResourceServersRequest->userPoolId = 'dolores';
    $request->maxResults = 'blanditiis';
    $request->nextToken = 'in';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ListResourceServersXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_RESOURCE_SERVERS;

    $response = $sdk->sdk->listResourceServers($request);

    if ($response->listResourceServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'blanditiis';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserImportJobs

Lists the user import jobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUserImportJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserImportJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserImportJobsRequest();
    $request->listUserImportJobsRequest = new ListUserImportJobsRequest();
    $request->listUserImportJobsRequest->maxResults = 940210;
    $request->listUserImportJobsRequest->paginationToken = 'exercitationem';
    $request->listUserImportJobsRequest->userPoolId = 'nobis';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListUserImportJobsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_IMPORT_JOBS;

    $response = $sdk->sdk->listUserImportJobs($request);

    if ($response->listUserImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserPoolClients

Lists the clients that have been created for the specified user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserPoolClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUserPoolClientsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserPoolClientsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserPoolClientsRequest();
    $request->listUserPoolClientsRequest = new ListUserPoolClientsRequest();
    $request->listUserPoolClientsRequest->maxResults = 451822;
    $request->listUserPoolClientsRequest->nextToken = 'expedita';
    $request->listUserPoolClientsRequest->userPoolId = 'ab';
    $request->maxResults = 'iste';
    $request->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListUserPoolClientsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_POOL_CLIENTS;

    $response = $sdk->sdk->listUserPoolClients($request);

    if ($response->listUserPoolClientsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserPools

Lists the user pools associated with an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUserPoolsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserPoolsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserPoolsRequest();
    $request->listUserPoolsRequest = new ListUserPoolsRequest();
    $request->listUserPoolsRequest->maxResults = 604118;
    $request->listUserPoolsRequest->nextToken = 'architecto';
    $request->maxResults = 'suscipit';
    $request->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'illo';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = ListUserPoolsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USER_POOLS;

    $response = $sdk->sdk->listUserPools($request);

    if ($response->listUserPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsers

Lists the users in the Amazon Cognito user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersRequest();
    $request->limit = 'sed';
    $request->listUsersRequest = new ListUsersRequest();
    $request->listUsersRequest->attributesToGet = [
        'eius',
        'necessitatibus',
        'ipsum',
    ];
    $request->listUsersRequest->filter = 'ea';
    $request->listUsersRequest->limit = 579912;
    $request->listUsersRequest->paginationToken = 'quos';
    $request->listUsersRequest->userPoolId = 'voluptatibus';
    $request->paginationToken = 'tempora';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = ListUsersXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USERS;

    $response = $sdk->sdk->listUsers($request);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsersInGroup

<p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersInGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsersInGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersInGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersInGroupRequest();
    $request->limit = 'praesentium';
    $request->listUsersInGroupRequest = new ListUsersInGroupRequest();
    $request->listUsersInGroupRequest->groupName = 'facilis';
    $request->listUsersInGroupRequest->limit = 310381;
    $request->listUsersInGroupRequest->nextToken = 'incidunt';
    $request->listUsersInGroupRequest->userPoolId = 'ipsam';
    $request->nextToken = 'debitis';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'veniam';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ListUsersInGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_LIST_USERS_IN_GROUP;

    $response = $sdk->sdk->listUsersInGroup($request);

    if ($response->listUsersInGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendConfirmationCode

<p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResendConfirmationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResendConfirmationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\ResendConfirmationCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResendConfirmationCodeRequest();
    $request->resendConfirmationCodeRequest = new ResendConfirmationCodeRequest();
    $request->resendConfirmationCodeRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->resendConfirmationCodeRequest->analyticsMetadata->analyticsEndpointId = 'reiciendis';
    $request->resendConfirmationCodeRequest->clientId = 'nulla';
    $request->resendConfirmationCodeRequest->clientMetadata = [
        'aperiam' => 'saepe',
    ];
    $request->resendConfirmationCodeRequest->secretHash = 'numquam';
    $request->resendConfirmationCodeRequest->userContextData = new UserContextDataType();
    $request->resendConfirmationCodeRequest->userContextData->encodedData = 'veniam';
    $request->resendConfirmationCodeRequest->userContextData->ipAddress = 'in';
    $request->resendConfirmationCodeRequest->username = 'officiis';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ResendConfirmationCodeXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_RESEND_CONFIRMATION_CODE;

    $response = $sdk->sdk->resendConfirmationCode($request);

    if ($response->resendConfirmationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## respondToAuthChallenge

<p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RespondToAuthChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\RespondToAuthChallengeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\ChallengeNameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\RespondToAuthChallengeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RespondToAuthChallengeRequest();
    $request->respondToAuthChallengeRequest = new RespondToAuthChallengeRequest();
    $request->respondToAuthChallengeRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->respondToAuthChallengeRequest->analyticsMetadata->analyticsEndpointId = 'voluptatum';
    $request->respondToAuthChallengeRequest->challengeName = ChallengeNameTypeEnum::DEVICE_SRP_AUTH;
    $request->respondToAuthChallengeRequest->challengeResponses = [
        'expedita' => 'debitis',
        'neque' => 'dolorum',
        'nostrum' => 'officia',
        'dolorum' => 'corrupti',
    ];
    $request->respondToAuthChallengeRequest->clientId = 'accusamus';
    $request->respondToAuthChallengeRequest->clientMetadata = [
        'atque' => 'fugit',
        'ut' => 'fugiat',
    ];
    $request->respondToAuthChallengeRequest->session = 'voluptatem';
    $request->respondToAuthChallengeRequest->userContextData = new UserContextDataType();
    $request->respondToAuthChallengeRequest->userContextData->encodedData = 'culpa';
    $request->respondToAuthChallengeRequest->userContextData->ipAddress = 'expedita';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = RespondToAuthChallengeXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_RESPOND_TO_AUTH_CHALLENGE;

    $response = $sdk->sdk->respondToAuthChallenge($request);

    if ($response->respondToAuthChallengeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeToken

Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RevokeTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevokeTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokeTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeTokenRequest();
    $request->revokeTokenRequest = new RevokeTokenRequest();
    $request->revokeTokenRequest->clientId = 'repudiandae';
    $request->revokeTokenRequest->clientSecret = 'corporis';
    $request->revokeTokenRequest->token = 'et';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = RevokeTokenXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_REVOKE_TOKEN;

    $response = $sdk->sdk->revokeToken($request);

    if ($response->revokeTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setRiskConfiguration

<p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetRiskConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetRiskConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTakeoverRiskConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\AccountTakeoverActionsType;
use \OpenAPI\OpenAPI\Models\Shared\AccountTakeoverActionType;
use \OpenAPI\OpenAPI\Models\Shared\AccountTakeoverEventActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotifyConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\NotifyEmailType;
use \OpenAPI\OpenAPI\Models\Shared\CompromisedCredentialsRiskConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\CompromisedCredentialsActionsType;
use \OpenAPI\OpenAPI\Models\Shared\CompromisedCredentialsEventActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RiskExceptionConfigurationType;
use \OpenAPI\OpenAPI\Models\Operations\SetRiskConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetRiskConfigurationRequest();
    $request->setRiskConfigurationRequest = new SetRiskConfigurationRequest();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration = new AccountTakeoverRiskConfigurationType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions = new AccountTakeoverActionsType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->highAction = new AccountTakeoverActionType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->highAction->eventAction = AccountTakeoverEventActionTypeEnum::MFA_REQUIRED;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->highAction->notify = false;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->lowAction = new AccountTakeoverActionType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->lowAction->eventAction = AccountTakeoverEventActionTypeEnum::BLOCK;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->lowAction->notify = false;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->mediumAction = new AccountTakeoverActionType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->mediumAction->eventAction = AccountTakeoverEventActionTypeEnum::MFA_IF_CONFIGURED;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->actions->mediumAction->notify = false;
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration = new NotifyConfigurationType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->blockEmail = new NotifyEmailType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->blockEmail->htmlBody = 'reiciendis';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->blockEmail->subject = 'dolorem';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->blockEmail->textBody = 'harum';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->from = 'dicta';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->mfaEmail = new NotifyEmailType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->mfaEmail->htmlBody = 'architecto';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->mfaEmail->subject = 'occaecati';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->mfaEmail->textBody = 'labore';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->noActionEmail = new NotifyEmailType();
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->noActionEmail->htmlBody = 'quidem';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->noActionEmail->subject = 'atque';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->noActionEmail->textBody = 'laborum';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->replyTo = 'nam';
    $request->setRiskConfigurationRequest->accountTakeoverRiskConfiguration->notifyConfiguration->sourceArn = 'tenetur';
    $request->setRiskConfigurationRequest->clientId = 'laboriosam';
    $request->setRiskConfigurationRequest->compromisedCredentialsRiskConfiguration = new CompromisedCredentialsRiskConfigurationType();
    $request->setRiskConfigurationRequest->compromisedCredentialsRiskConfiguration->actions = new CompromisedCredentialsActionsType();
    $request->setRiskConfigurationRequest->compromisedCredentialsRiskConfiguration->actions->eventAction = CompromisedCredentialsEventActionTypeEnum::BLOCK;
    $request->setRiskConfigurationRequest->compromisedCredentialsRiskConfiguration->eventFilter = [
        EventFilterTypeEnum::PASSWORD_CHANGE,
    ];
    $request->setRiskConfigurationRequest->riskExceptionConfiguration = new RiskExceptionConfigurationType();
    $request->setRiskConfigurationRequest->riskExceptionConfiguration->blockedIPRangeList = [
        'unde',
        'reiciendis',
    ];
    $request->setRiskConfigurationRequest->riskExceptionConfiguration->skippedIPRangeList = [
        'repellendus',
        'delectus',
        'voluptates',
    ];
    $request->setRiskConfigurationRequest->userPoolId = 'perferendis';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = SetRiskConfigurationXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_RISK_CONFIGURATION;

    $response = $sdk->sdk->setRiskConfiguration($request);

    if ($response->setRiskConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setUICustomization

<p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetUICustomizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetUICustomizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetUICustomizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetUICustomizationRequest();
    $request->setUICustomizationRequest = new SetUICustomizationRequest();
    $request->setUICustomizationRequest->css = 'veniam';
    $request->setUICustomizationRequest->clientId = 'voluptatem';
    $request->setUICustomizationRequest->imageFile = 'quisquam';
    $request->setUICustomizationRequest->userPoolId = 'repudiandae';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = SetUICustomizationXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_UI_CUSTOMIZATION;

    $response = $sdk->sdk->setUICustomization($request);

    if ($response->setUICustomizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setUserMFAPreference

Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetUserMFAPreferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetUserMFAPreferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\SMSMfaSettingsType;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareTokenMfaSettingsType;
use \OpenAPI\OpenAPI\Models\Operations\SetUserMFAPreferenceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetUserMFAPreferenceRequest();
    $request->setUserMFAPreferenceRequest = new SetUserMFAPreferenceRequest();
    $request->setUserMFAPreferenceRequest->accessToken = 'maxime';
    $request->setUserMFAPreferenceRequest->smsMfaSettings = new SMSMfaSettingsType();
    $request->setUserMFAPreferenceRequest->smsMfaSettings->enabled = false;
    $request->setUserMFAPreferenceRequest->smsMfaSettings->preferredMfa = false;
    $request->setUserMFAPreferenceRequest->softwareTokenMfaSettings = new SoftwareTokenMfaSettingsType();
    $request->setUserMFAPreferenceRequest->softwareTokenMfaSettings->enabled = false;
    $request->setUserMFAPreferenceRequest->softwareTokenMfaSettings->preferredMfa = false;
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = SetUserMFAPreferenceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_MFA_PREFERENCE;

    $response = $sdk->sdk->setUserMFAPreference($request);

    if ($response->setUserMFAPreferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setUserPoolMfaConfig

<p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetUserPoolMfaConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetUserPoolMfaConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolMfaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SmsMfaConfigType;
use \OpenAPI\OpenAPI\Models\Shared\SmsConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\SoftwareTokenMfaConfigType;
use \OpenAPI\OpenAPI\Models\Operations\SetUserPoolMfaConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetUserPoolMfaConfigRequest();
    $request->setUserPoolMfaConfigRequest = new SetUserPoolMfaConfigRequest();
    $request->setUserPoolMfaConfigRequest->mfaConfiguration = UserPoolMfaTypeEnum::OPTIONAL;
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration = new SmsMfaConfigType();
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration->smsAuthenticationMessage = 'officiis';
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration->smsConfiguration = new SmsConfigurationType();
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration->smsConfiguration->externalId = 'accusamus';
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration->smsConfiguration->snsCallerArn = 'natus';
    $request->setUserPoolMfaConfigRequest->smsMfaConfiguration->smsConfiguration->snsRegion = 'minima';
    $request->setUserPoolMfaConfigRequest->softwareTokenMfaConfiguration = new SoftwareTokenMfaConfigType();
    $request->setUserPoolMfaConfigRequest->softwareTokenMfaConfiguration->enabled = false;
    $request->setUserPoolMfaConfigRequest->userPoolId = 'aspernatur';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = SetUserPoolMfaConfigXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_POOL_MFA_CONFIG;

    $response = $sdk->sdk->setUserPoolMfaConfig($request);

    if ($response->setUserPoolMfaConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\MFAOptionType;
use \OpenAPI\OpenAPI\Models\Shared\DeliveryMediumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetUserSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetUserSettingsRequest();
    $request->setUserSettingsRequest = new SetUserSettingsRequest();
    $request->setUserSettingsRequest->accessToken = 'repudiandae';
    $request->setUserSettingsRequest->mfaOptions = [
        new MFAOptionType(),
        new MFAOptionType(),
        new MFAOptionType(),
    ];
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = SetUserSettingsXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SET_USER_SETTINGS;

    $response = $sdk->sdk->setUserSettings($request);

    if ($response->setUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signUp

<p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SignUpRequest;
use \OpenAPI\OpenAPI\Models\Shared\SignUpRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsMetadataType;
use \OpenAPI\OpenAPI\Models\Shared\AttributeType;
use \OpenAPI\OpenAPI\Models\Shared\UserContextDataType;
use \OpenAPI\OpenAPI\Models\Operations\SignUpXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignUpRequest();
    $request->signUpRequest = new SignUpRequest();
    $request->signUpRequest->analyticsMetadata = new AnalyticsMetadataType();
    $request->signUpRequest->analyticsMetadata->analyticsEndpointId = 'doloremque';
    $request->signUpRequest->clientId = 'repudiandae';
    $request->signUpRequest->clientMetadata = [
        'accusantium' => 'beatae',
    ];
    $request->signUpRequest->password = 'dolores';
    $request->signUpRequest->secretHash = 'enim';
    $request->signUpRequest->userAttributes = [
        new AttributeType(),
        new AttributeType(),
    ];
    $request->signUpRequest->userContextData = new UserContextDataType();
    $request->signUpRequest->userContextData->encodedData = 'velit';
    $request->signUpRequest->userContextData->ipAddress = 'a';
    $request->signUpRequest->username = 'molestias';
    $request->signUpRequest->validationData = [
        new AttributeType(),
        new AttributeType(),
    ];
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = SignUpXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SIGN_UP;

    $response = $sdk->sdk->signUp($request);

    if ($response->signUpResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startUserImportJob

Starts the user import.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartUserImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartUserImportJobRequest();
    $request->startUserImportJobRequest = new StartUserImportJobRequest();
    $request->startUserImportJobRequest->jobId = 'eveniet';
    $request->startUserImportJobRequest->userPoolId = 'occaecati';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'illo';
    $request->xAmzTarget = StartUserImportJobXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_START_USER_IMPORT_JOB;

    $response = $sdk->sdk->startUserImportJob($request);

    if ($response->startUserImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopUserImportJob

Stops the user import job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopUserImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopUserImportJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopUserImportJobRequest();
    $request->stopUserImportJobRequest = new StopUserImportJobRequest();
    $request->stopUserImportJobRequest->jobId = 'corporis';
    $request->stopUserImportJobRequest->userPoolId = 'quidem';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = StopUserImportJobXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_STOP_USER_IMPORT_JOB;

    $response = $sdk->sdk->stopUserImportJob($request);

    if ($response->stopUserImportJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'quae';
    $request->tagResourceRequest->tags = [
        'eveniet' => 'qui',
        'cum' => 'iure',
    ];
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'ad';
    $request->untagResourceRequest->tagKeys = [
        'alias',
        'corporis',
        'perspiciatis',
        'nihil',
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAuthEventFeedback

Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthEventFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAuthEventFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedbackValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuthEventFeedbackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAuthEventFeedbackRequest();
    $request->updateAuthEventFeedbackRequest = new UpdateAuthEventFeedbackRequest();
    $request->updateAuthEventFeedbackRequest->eventId = 'minima';
    $request->updateAuthEventFeedbackRequest->feedbackToken = 'dolore';
    $request->updateAuthEventFeedbackRequest->feedbackValue = FeedbackValueTypeEnum::INVALID;
    $request->updateAuthEventFeedbackRequest->userPoolId = 'nesciunt';
    $request->updateAuthEventFeedbackRequest->username = 'quae';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = UpdateAuthEventFeedbackXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_AUTH_EVENT_FEEDBACK;

    $response = $sdk->sdk->updateAuthEventFeedback($request);

    if ($response->updateAuthEventFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceStatus

Updates the device status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRememberedStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceStatusRequest();
    $request->updateDeviceStatusRequest = new UpdateDeviceStatusRequest();
    $request->updateDeviceStatusRequest->accessToken = 'adipisci';
    $request->updateDeviceStatusRequest->deviceKey = 'debitis';
    $request->updateDeviceStatusRequest->deviceRememberedStatus = DeviceRememberedStatusTypeEnum::NOT_REMEMBERED;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = UpdateDeviceStatusXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_DEVICE_STATUS;

    $response = $sdk->sdk->updateDeviceStatus($request);

    if ($response->updateDeviceStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroup

<p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupRequest();
    $request->updateGroupRequest = new UpdateGroupRequest();
    $request->updateGroupRequest->description = 'reiciendis';
    $request->updateGroupRequest->groupName = 'provident';
    $request->updateGroupRequest->precedence = 133439;
    $request->updateGroupRequest->roleArn = 'ullam';
    $request->updateGroupRequest->userPoolId = 'quasi';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = UpdateGroupXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_GROUP;

    $response = $sdk->sdk->updateGroup($request);

    if ($response->updateGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIdentityProvider

Updates IdP information for a user pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdentityProviderRequest();
    $request->updateIdentityProviderRequest = new UpdateIdentityProviderRequest();
    $request->updateIdentityProviderRequest->attributeMapping = [
        'accusantium' => 'repellat',
        'doloribus' => 'ullam',
    ];
    $request->updateIdentityProviderRequest->idpIdentifiers = [
        'nam',
        'earum',
    ];
    $request->updateIdentityProviderRequest->providerDetails = [
        'laborum' => 'placeat',
        'modi' => 'voluptatibus',
        'molestias' => 'officiis',
    ];
    $request->updateIdentityProviderRequest->providerName = 'sapiente';
    $request->updateIdentityProviderRequest->userPoolId = 'cumque';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = UpdateIdentityProviderXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_IDENTITY_PROVIDER;

    $response = $sdk->sdk->updateIdentityProvider($request);

    if ($response->updateIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceServer

<p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResourceServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceServerScopeType;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceServerRequest();
    $request->updateResourceServerRequest = new UpdateResourceServerRequest();
    $request->updateResourceServerRequest->identifier = 'quae';
    $request->updateResourceServerRequest->name = 'Josephine Collins';
    $request->updateResourceServerRequest->scopes = [
        new ResourceServerScopeType(),
        new ResourceServerScopeType(),
        new ResourceServerScopeType(),
    ];
    $request->updateResourceServerRequest->userPoolId = 'at';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = UpdateResourceServerXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_RESOURCE_SERVER;

    $response = $sdk->sdk->updateResourceServer($request);

    if ($response->updateResourceServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserAttributes

<p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttributeType;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserAttributesRequest();
    $request->updateUserAttributesRequest = new UpdateUserAttributesRequest();
    $request->updateUserAttributesRequest->accessToken = 'cupiditate';
    $request->updateUserAttributesRequest->clientMetadata = [
        'earum' => 'soluta',
        'hic' => 'illum',
        'eaque' => 'earum',
    ];
    $request->updateUserAttributesRequest->userAttributes = [
        new AttributeType(),
        new AttributeType(),
        new AttributeType(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = UpdateUserAttributesXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_ATTRIBUTES;

    $response = $sdk->sdk->updateUserAttributes($request);

    if ($response->updateUserAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserPool

<p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountRecoverySettingType;
use \OpenAPI\OpenAPI\Models\Shared\RecoveryOptionType;
use \OpenAPI\OpenAPI\Models\Shared\RecoveryOptionNameTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateUserConfigType;
use \OpenAPI\OpenAPI\Models\Shared\MessageTemplateType;
use \OpenAPI\OpenAPI\Models\Shared\VerifiedAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeletionProtectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\EmailConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\EmailSendingAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LambdaConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomEmailLambdaVersionConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomEmailSenderLambdaVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomSMSLambdaVersionConfigType;
use \OpenAPI\OpenAPI\Models\Shared\CustomSMSSenderLambdaVersionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolMfaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolPolicyType;
use \OpenAPI\OpenAPI\Models\Shared\PasswordPolicyType;
use \OpenAPI\OpenAPI\Models\Shared\SmsConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\UserAttributeUpdateSettingsType;
use \OpenAPI\OpenAPI\Models\Shared\UserPoolAddOnsType;
use \OpenAPI\OpenAPI\Models\Shared\AdvancedSecurityModeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerificationMessageTemplateType;
use \OpenAPI\OpenAPI\Models\Shared\DefaultEmailOptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserPoolRequest();
    $request->updateUserPoolRequest = new UpdateUserPoolRequest();
    $request->updateUserPoolRequest->accountRecoverySetting = new AccountRecoverySettingType();
    $request->updateUserPoolRequest->accountRecoverySetting->recoveryMechanisms = [
        new RecoveryOptionType(),
        new RecoveryOptionType(),
        new RecoveryOptionType(),
        new RecoveryOptionType(),
    ];
    $request->updateUserPoolRequest->adminCreateUserConfig = new AdminCreateUserConfigType();
    $request->updateUserPoolRequest->adminCreateUserConfig->allowAdminCreateUserOnly = false;
    $request->updateUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate = new MessageTemplateType();
    $request->updateUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->emailMessage = 'fuga';
    $request->updateUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->emailSubject = 'ratione';
    $request->updateUserPoolRequest->adminCreateUserConfig->inviteMessageTemplate->smsMessage = 'animi';
    $request->updateUserPoolRequest->adminCreateUserConfig->unusedAccountValidityDays = 898760;
    $request->updateUserPoolRequest->autoVerifiedAttributes = [
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
    ];
    $request->updateUserPoolRequest->deletionProtection = DeletionProtectionTypeEnum::INACTIVE;
    $request->updateUserPoolRequest->deviceConfiguration = new DeviceConfigurationType();
    $request->updateUserPoolRequest->deviceConfiguration->challengeRequiredOnNewDevice = false;
    $request->updateUserPoolRequest->deviceConfiguration->deviceOnlyRememberedOnUserPrompt = false;
    $request->updateUserPoolRequest->emailConfiguration = new EmailConfigurationType();
    $request->updateUserPoolRequest->emailConfiguration->configurationSet = 'occaecati';
    $request->updateUserPoolRequest->emailConfiguration->emailSendingAccount = EmailSendingAccountTypeEnum::COGNITO_DEFAULT;
    $request->updateUserPoolRequest->emailConfiguration->from = 'adipisci';
    $request->updateUserPoolRequest->emailConfiguration->replyToEmailAddress = 'quasi';
    $request->updateUserPoolRequest->emailConfiguration->sourceArn = 'magni';
    $request->updateUserPoolRequest->emailVerificationMessage = 'doloribus';
    $request->updateUserPoolRequest->emailVerificationSubject = 'nulla';
    $request->updateUserPoolRequest->lambdaConfig = new LambdaConfigType();
    $request->updateUserPoolRequest->lambdaConfig->createAuthChallenge = 'necessitatibus';
    $request->updateUserPoolRequest->lambdaConfig->customEmailSender = new CustomEmailLambdaVersionConfigType();
    $request->updateUserPoolRequest->lambdaConfig->customEmailSender->lambdaArn = 'ipsa';
    $request->updateUserPoolRequest->lambdaConfig->customEmailSender->lambdaVersion = CustomEmailSenderLambdaVersionTypeEnum::V10;
    $request->updateUserPoolRequest->lambdaConfig->customMessage = 'tempora';
    $request->updateUserPoolRequest->lambdaConfig->customSMSSender = new CustomSMSLambdaVersionConfigType();
    $request->updateUserPoolRequest->lambdaConfig->customSMSSender->lambdaArn = 'nihil';
    $request->updateUserPoolRequest->lambdaConfig->customSMSSender->lambdaVersion = CustomSMSSenderLambdaVersionTypeEnum::V10;
    $request->updateUserPoolRequest->lambdaConfig->defineAuthChallenge = 'molestiae';
    $request->updateUserPoolRequest->lambdaConfig->kmsKeyID = 'dicta';
    $request->updateUserPoolRequest->lambdaConfig->postAuthentication = 'iusto';
    $request->updateUserPoolRequest->lambdaConfig->postConfirmation = 'esse';
    $request->updateUserPoolRequest->lambdaConfig->preAuthentication = 'praesentium';
    $request->updateUserPoolRequest->lambdaConfig->preSignUp = 'maiores';
    $request->updateUserPoolRequest->lambdaConfig->preTokenGeneration = 'reiciendis';
    $request->updateUserPoolRequest->lambdaConfig->userMigration = 'vel';
    $request->updateUserPoolRequest->lambdaConfig->verifyAuthChallengeResponse = 'architecto';
    $request->updateUserPoolRequest->mfaConfiguration = UserPoolMfaTypeEnum::OPTIONAL;
    $request->updateUserPoolRequest->policies = new UserPoolPolicyType();
    $request->updateUserPoolRequest->policies->passwordPolicy = new PasswordPolicyType();
    $request->updateUserPoolRequest->policies->passwordPolicy->minimumLength = 39650;
    $request->updateUserPoolRequest->policies->passwordPolicy->requireLowercase = false;
    $request->updateUserPoolRequest->policies->passwordPolicy->requireNumbers = false;
    $request->updateUserPoolRequest->policies->passwordPolicy->requireSymbols = false;
    $request->updateUserPoolRequest->policies->passwordPolicy->requireUppercase = false;
    $request->updateUserPoolRequest->policies->passwordPolicy->temporaryPasswordValidityDays = 117315;
    $request->updateUserPoolRequest->smsAuthenticationMessage = 'odio';
    $request->updateUserPoolRequest->smsConfiguration = new SmsConfigurationType();
    $request->updateUserPoolRequest->smsConfiguration->externalId = 'tempora';
    $request->updateUserPoolRequest->smsConfiguration->snsCallerArn = 'esse';
    $request->updateUserPoolRequest->smsConfiguration->snsRegion = 'ex';
    $request->updateUserPoolRequest->smsVerificationMessage = 'consectetur';
    $request->updateUserPoolRequest->userAttributeUpdateSettings = new UserAttributeUpdateSettingsType();
    $request->updateUserPoolRequest->userAttributeUpdateSettings->attributesRequireVerificationBeforeUpdate = [
        VerifiedAttributeTypeEnum::PHONE_NUMBER,
        VerifiedAttributeTypeEnum::EMAIL,
    ];
    $request->updateUserPoolRequest->userPoolAddOns = new UserPoolAddOnsType();
    $request->updateUserPoolRequest->userPoolAddOns->advancedSecurityMode = AdvancedSecurityModeTypeEnum::OFF;
    $request->updateUserPoolRequest->userPoolId = 'nostrum';
    $request->updateUserPoolRequest->userPoolTags = [
        'expedita' => 'aliquid',
        'officia' => 'suscipit',
        'aliquid' => 'perferendis',
        'eum' => 'voluptas',
    ];
    $request->updateUserPoolRequest->verificationMessageTemplate = new VerificationMessageTemplateType();
    $request->updateUserPoolRequest->verificationMessageTemplate->defaultEmailOption = DefaultEmailOptionTypeEnum::CONFIRM_WITH_CODE;
    $request->updateUserPoolRequest->verificationMessageTemplate->emailMessage = 'id';
    $request->updateUserPoolRequest->verificationMessageTemplate->emailMessageByLink = 'ab';
    $request->updateUserPoolRequest->verificationMessageTemplate->emailSubject = 'error';
    $request->updateUserPoolRequest->verificationMessageTemplate->emailSubjectByLink = 'possimus';
    $request->updateUserPoolRequest->verificationMessageTemplate->smsMessage = 'voluptates';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = UpdateUserPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL;

    $response = $sdk->sdk->updateUserPool($request);

    if ($response->updateUserPoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserPoolClient

<p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserPoolClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\OAuthFlowTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\ExplicitAuthFlowsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PreventUserExistenceErrorTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\TokenValidityUnitsType;
use \OpenAPI\OpenAPI\Models\Shared\TimeUnitsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolClientXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserPoolClientRequest();
    $request->updateUserPoolClientRequest = new UpdateUserPoolClientRequest();
    $request->updateUserPoolClientRequest->accessTokenValidity = 833316;
    $request->updateUserPoolClientRequest->allowedOAuthFlows = [
        OAuthFlowTypeEnum::CLIENT_CREDENTIALS,
        OAuthFlowTypeEnum::IMPLICIT,
    ];
    $request->updateUserPoolClientRequest->allowedOAuthFlowsUserPoolClient = false;
    $request->updateUserPoolClientRequest->allowedOAuthScopes = [
        'ad',
        'expedita',
    ];
    $request->updateUserPoolClientRequest->analyticsConfiguration = new AnalyticsConfigurationType();
    $request->updateUserPoolClientRequest->analyticsConfiguration->applicationArn = 'voluptatem';
    $request->updateUserPoolClientRequest->analyticsConfiguration->applicationId = 'molestias';
    $request->updateUserPoolClientRequest->analyticsConfiguration->externalId = 'cum';
    $request->updateUserPoolClientRequest->analyticsConfiguration->roleArn = 'aliquid';
    $request->updateUserPoolClientRequest->analyticsConfiguration->userDataShared = false;
    $request->updateUserPoolClientRequest->authSessionValidity = 109784;
    $request->updateUserPoolClientRequest->callbackURLs = [
        'omnis',
        'veritatis',
        'rerum',
    ];
    $request->updateUserPoolClientRequest->clientId = 'est';
    $request->updateUserPoolClientRequest->clientName = 'culpa';
    $request->updateUserPoolClientRequest->defaultRedirectURI = 'voluptatem';
    $request->updateUserPoolClientRequest->enablePropagateAdditionalUserContextData = false;
    $request->updateUserPoolClientRequest->enableTokenRevocation = false;
    $request->updateUserPoolClientRequest->explicitAuthFlows = [
        ExplicitAuthFlowsTypeEnum::ALLOW_REFRESH_TOKEN_AUTH,
        ExplicitAuthFlowsTypeEnum::ADMIN_NO_SRP_AUTH,
        ExplicitAuthFlowsTypeEnum::ALLOW_USER_PASSWORD_AUTH,
        ExplicitAuthFlowsTypeEnum::ALLOW_USER_SRP_AUTH,
    ];
    $request->updateUserPoolClientRequest->idTokenValidity = 891315;
    $request->updateUserPoolClientRequest->logoutURLs = [
        'alias',
    ];
    $request->updateUserPoolClientRequest->preventUserExistenceErrors = PreventUserExistenceErrorTypesEnum::ENABLED;
    $request->updateUserPoolClientRequest->readAttributes = [
        'ex',
        'sapiente',
        'rem',
        'minus',
    ];
    $request->updateUserPoolClientRequest->refreshTokenValidity = 365100;
    $request->updateUserPoolClientRequest->supportedIdentityProviders = [
        'ratione',
        'ullam',
        'perferendis',
        'illum',
    ];
    $request->updateUserPoolClientRequest->tokenValidityUnits = new TokenValidityUnitsType();
    $request->updateUserPoolClientRequest->tokenValidityUnits->accessToken = TimeUnitsTypeEnum::HOURS;
    $request->updateUserPoolClientRequest->tokenValidityUnits->idToken = TimeUnitsTypeEnum::DAYS;
    $request->updateUserPoolClientRequest->tokenValidityUnits->refreshToken = TimeUnitsTypeEnum::DAYS;
    $request->updateUserPoolClientRequest->userPoolId = 'nam';
    $request->updateUserPoolClientRequest->writeAttributes = [
        'culpa',
        'dolor',
    ];
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = UpdateUserPoolClientXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL_CLIENT;

    $response = $sdk->sdk->updateUserPoolClient($request);

    if ($response->updateUserPoolClientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserPoolDomain

<p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserPoolDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomDomainConfigType;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserPoolDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserPoolDomainRequest();
    $request->updateUserPoolDomainRequest = new UpdateUserPoolDomainRequest();
    $request->updateUserPoolDomainRequest->customDomainConfig = new CustomDomainConfigType();
    $request->updateUserPoolDomainRequest->customDomainConfig->certificateArn = 'architecto';
    $request->updateUserPoolDomainRequest->domain = 'sit';
    $request->updateUserPoolDomainRequest->userPoolId = 'modi';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = UpdateUserPoolDomainXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_UPDATE_USER_POOL_DOMAIN;

    $response = $sdk->sdk->updateUserPoolDomain($request);

    if ($response->updateUserPoolDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifySoftwareToken

Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VerifySoftwareTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerifySoftwareTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\VerifySoftwareTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifySoftwareTokenRequest();
    $request->verifySoftwareTokenRequest = new VerifySoftwareTokenRequest();
    $request->verifySoftwareTokenRequest->accessToken = 'consequuntur';
    $request->verifySoftwareTokenRequest->friendlyDeviceName = 'ipsa';
    $request->verifySoftwareTokenRequest->session = 'quas';
    $request->verifySoftwareTokenRequest->userCode = 'eveniet';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = VerifySoftwareTokenXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_VERIFY_SOFTWARE_TOKEN;

    $response = $sdk->sdk->verifySoftwareToken($request);

    if ($response->verifySoftwareTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyUserAttribute

<p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VerifyUserAttributeRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerifyUserAttributeRequest;
use \OpenAPI\OpenAPI\Models\Operations\VerifyUserAttributeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyUserAttributeRequest();
    $request->verifyUserAttributeRequest = new VerifyUserAttributeRequest();
    $request->verifyUserAttributeRequest->accessToken = 'expedita';
    $request->verifyUserAttributeRequest->attributeName = 'eum';
    $request->verifyUserAttributeRequest->code = 'vel';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = VerifyUserAttributeXAmzTargetEnum::AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_VERIFY_USER_ATTRIBUTE;

    $response = $sdk->sdk->verifyUserAttribute($request);

    if ($response->verifyUserAttributeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
