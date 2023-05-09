# SDK

## Overview

<p>Using the Amazon Cognito user pools API, you can create a user pool to manage directories and users. You can authenticate a user to obtain tokens related to user identity and access policies.</p> <p>This API reference provides information about user pools in Amazon Cognito user pools.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html">Amazon Cognito Documentation</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-idp/>
### Available Operations

* [AddCustomAttributes](#addcustomattributes) - Adds additional user attributes to the user pool schema.
* [AdminAddUserToGroup](#adminaddusertogroup) - <p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [AdminConfirmSignUp](#adminconfirmsignup) - <p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [AdminCreateUser](#admincreateuser) - <p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>
* [AdminDeleteUser](#admindeleteuser) - <p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [AdminDeleteUserAttributes](#admindeleteuserattributes) - <p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [AdminDisableProviderForUser](#admindisableproviderforuser) - <p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>
* [AdminDisableUser](#admindisableuser) - <p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>
* [AdminEnableUser](#adminenableuser) - <p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [AdminForgetDevice](#adminforgetdevice) - <p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [AdminGetDevice](#admingetdevice) - <p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [AdminGetUser](#admingetuser) - <p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>
* [AdminInitiateAuth](#admininitiateauth) - <p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [AdminLinkProviderForUser](#adminlinkproviderforuser) - <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is administrative and requires developer credentials.</p>
* [AdminListDevices](#adminlistdevices) - <p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [AdminListGroupsForUser](#adminlistgroupsforuser) - <p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>
* [AdminListUserAuthEvents](#adminlistuserauthevents) - A history of user activity and any risks detected as part of Amazon Cognito advanced security.
* [AdminRemoveUserFromGroup](#adminremoveuserfromgroup) - <p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [AdminResetUserPassword](#adminresetuserpassword) - <p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [AdminRespondToAuthChallenge](#adminrespondtoauthchallenge) - <p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [AdminSetUserMFAPreference](#adminsetusermfapreference) - The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.
* [AdminSetUserPassword](#adminsetuserpassword) - <p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p>
* [AdminSetUserSettings](#adminsetusersettings) -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.
* [AdminUpdateAuthEventFeedback](#adminupdateautheventfeedback) - Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
* [AdminUpdateDeviceStatus](#adminupdatedevicestatus) - <p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>
* [AdminUpdateUserAttributes](#adminupdateuserattributes) - <p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>
* [AdminUserGlobalSignOut](#adminuserglobalsignout) - <p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. The user's current access and ID tokens remain valid until they expire. By default, access and ID tokens expire one hour after they're issued. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.</p> <p>Calling this action requires developer credentials.</p>
* [AssociateSoftwareToken](#associatesoftwaretoken) - <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note>
* [ChangePassword](#changepassword) - Changes the password for a specified user in a user pool.
* [ConfirmDevice](#confirmdevice) - Confirms tracking of the device. This API call is the call that begins device tracking.
* [ConfirmForgotPassword](#confirmforgotpassword) - Allows a user to enter a confirmation code to reset a forgotten password.
* [ConfirmSignUp](#confirmsignup) - Confirms registration of a new user.
* [CreateGroup](#creategroup) - <p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>
* [CreateIdentityProvider](#createidentityprovider) - Creates an IdP for a user pool.
* [CreateResourceServer](#createresourceserver) - Creates a new OAuth2.0 resource server and defines custom scopes within it.
* [CreateUserImportJob](#createuserimportjob) - Creates the user import job.
* [CreateUserPool](#createuserpool) - <p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [CreateUserPoolClient](#createuserpoolclient) - <p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
* [CreateUserPoolDomain](#createuserpooldomain) - Creates a new domain for a user pool.
* [DeleteGroup](#deletegroup) - <p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>
* [DeleteIdentityProvider](#deleteidentityprovider) - Deletes an IdP for a user pool.
* [DeleteResourceServer](#deleteresourceserver) - Deletes a resource server.
* [DeleteUser](#deleteuser) - Allows a user to delete himself or herself.
* [DeleteUserAttributes](#deleteuserattributes) - Deletes the attributes for a user.
* [DeleteUserPool](#deleteuserpool) - Deletes the specified Amazon Cognito user pool.
* [DeleteUserPoolClient](#deleteuserpoolclient) - Allows the developer to delete the user pool client.
* [DeleteUserPoolDomain](#deleteuserpooldomain) - Deletes a domain for a user pool.
* [DescribeIdentityProvider](#describeidentityprovider) - Gets information about a specific IdP.
* [DescribeResourceServer](#describeresourceserver) - Describes a resource server.
* [DescribeRiskConfiguration](#describeriskconfiguration) - Describes the risk configuration.
* [DescribeUserImportJob](#describeuserimportjob) - Describes the user import job.
* [DescribeUserPool](#describeuserpool) - Returns the configuration information and metadata of the specified user pool.
* [DescribeUserPoolClient](#describeuserpoolclient) - Client method for returning the configuration information and metadata of the specified user pool app client.
* [DescribeUserPoolDomain](#describeuserpooldomain) - Gets information about a domain.
* [ForgetDevice](#forgetdevice) - Forgets the specified device.
* [ForgotPassword](#forgotpassword) - <p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [GetCSVHeader](#getcsvheader) - Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.
* [GetDevice](#getdevice) - Gets the device.
* [GetGroup](#getgroup) - <p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>
* [GetIdentityProviderByIdentifier](#getidentityproviderbyidentifier) - Gets the specified IdP.
* [GetSigningCertificate](#getsigningcertificate) - <p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>
* [GetUICustomization](#getuicustomization) - Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.
* [GetUser](#getuser) - Gets the user attributes and metadata for a user.
* [GetUserAttributeVerificationCode](#getuserattributeverificationcode) - <p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [GetUserPoolMfaConfig](#getuserpoolmfaconfig) - Gets the user pool multi-factor authentication (MFA) configuration.
* [GlobalSignOut](#globalsignout) - Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.
* [InitiateAuth](#initiateauth) - <p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [ListDevices](#listdevices) - Lists the sign-in devices that Amazon Cognito has registered to the current user.
* [ListGroups](#listgroups) - <p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>
* [ListIdentityProviders](#listidentityproviders) - Lists information about all IdPs for a user pool.
* [ListResourceServers](#listresourceservers) - Lists the resource servers for a user pool.
* [ListTagsForResource](#listtagsforresource) - <p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
* [ListUserImportJobs](#listuserimportjobs) - Lists the user import jobs.
* [ListUserPoolClients](#listuserpoolclients) - Lists the clients that have been created for the specified user pool.
* [ListUserPools](#listuserpools) - Lists the user pools associated with an Amazon Web Services account.
* [ListUsers](#listusers) - Lists the users in the Amazon Cognito user pool.
* [ListUsersInGroup](#listusersingroup) - <p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>
* [ResendConfirmationCode](#resendconfirmationcode) - <p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [RespondToAuthChallenge](#respondtoauthchallenge) - <p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [RevokeToken](#revoketoken) - Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.
* [SetRiskConfiguration](#setriskconfiguration) - <p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
* [SetUICustomization](#setuicustomization) - <p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>
* [SetUserMFAPreference](#setusermfapreference) - Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.
* [SetUserPoolMfaConfig](#setuserpoolmfaconfig) - <p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [SetUserSettings](#setusersettings) -  <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.
* [SignUp](#signup) - <p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [StartUserImportJob](#startuserimportjob) - Starts the user import.
* [StopUserImportJob](#stopuserimportjob) - Stops the user import job.
* [TagResource](#tagresource) - <p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>
* [UntagResource](#untagresource) - Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.
* [UpdateAuthEventFeedback](#updateautheventfeedback) - Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.
* [UpdateDeviceStatus](#updatedevicestatus) - Updates the device status.
* [UpdateGroup](#updategroup) - <p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>
* [UpdateIdentityProvider](#updateidentityprovider) - Updates IdP information for a user pool.
* [UpdateResourceServer](#updateresourceserver) - <p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important>
* [UpdateUserAttributes](#updateuserattributes) - <p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [UpdateUserPool](#updateuserpool) - <p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>
* [UpdateUserPoolClient](#updateuserpoolclient) - <p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
* [UpdateUserPoolDomain](#updateuserpooldomain) - <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
* [VerifySoftwareToken](#verifysoftwaretoken) - Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
* [VerifyUserAttribute](#verifyuserattribute) - <p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p>

## AddCustomAttributes

Adds additional user attributes to the user pool schema.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddCustomAttributes(ctx, operations.AddCustomAttributesRequest{
        AddCustomAttributesRequest: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumNumber.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Forrest Koepp"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("dolorum"),
                        MinValue: sdk.String("dicta"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("nam"),
                        MinLength: sdk.String("officia"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumDateTime.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Cassandra Welch"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("beatae"),
                        MinValue: sdk.String("commodi"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("molestiae"),
                        MinLength: sdk.String("modi"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumString.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Jonathon Klocko"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("aspernatur"),
                        MinValue: sdk.String("perferendis"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("ad"),
                        MinLength: sdk.String("natus"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumString.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Curtis Morissette"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("saepe"),
                        MinValue: sdk.String("fuga"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("in"),
                        MinLength: sdk.String("corporis"),
                    },
                },
            },
            UserPoolID: "iste",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.AddCustomAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAddCustomAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomAttributesResponse != nil {
        // handle response
    }
}
```

## AdminAddUserToGroup

<p>Adds the specified user to the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminAddUserToGroup(ctx, operations.AdminAddUserToGroupRequest{
        AdminAddUserToGroupRequest: shared.AdminAddUserToGroupRequest{
            GroupName: "mollitia",
            UserPoolID: "laborum",
            Username: "dolores",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.AdminAddUserToGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminAddUserToGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdminConfirmSignUp

<p>Confirms user registration as an admin without using a confirmation code. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminConfirmSignUp(ctx, operations.AdminConfirmSignUpRequest{
        AdminConfirmSignUpRequest: shared.AdminConfirmSignUpRequest{
            ClientMetadata: map[string]string{
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            UserPoolID: "doloribus",
            Username: "sapiente",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("mollitia"),
        XAmzTarget: operations.AdminConfirmSignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminConfirmSignUp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminConfirmSignUpResponse != nil {
        // handle response
    }
}
```

## AdminCreateUser

<p>Creates a new user in the specified user pool.</p> <p>If <code>MessageAction</code> isn't set, the default is to send a welcome message via email or phone (SMS).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password.</p> <p>Alternatively, you can call <code>AdminCreateUser</code> with <code>SUPPRESS</code> for the <code>MessageAction</code> parameter, and Amazon Cognito won't send any email. </p> <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until they sign in and change their password.</p> <p> <code>AdminCreateUser</code> requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminCreateUser(ctx, operations.AdminCreateUserRequest{
        AdminCreateUserRequest: shared.AdminCreateUserRequest{
            ClientMetadata: map[string]string{
                "numquam": "commodi",
                "quam": "molestiae",
                "velit": "error",
            },
            DesiredDeliveryMediums: []shared.DeliveryMediumTypeEnum{
                shared.DeliveryMediumTypeEnumSms,
            },
            ForceAliasCreation: sdk.Bool(false),
            MessageAction: shared.MessageActionTypeEnumResend.ToPointer(),
            TemporaryPassword: sdk.String("laborum"),
            UserAttributes: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Christina Satterfield",
                    Value: sdk.String("ipsam"),
                },
                shared.AttributeType{
                    Name: "Miss Rufus Ankunding",
                    Value: sdk.String("laborum"),
                },
                shared.AttributeType{
                    Name: "Johanna Wolf",
                    Value: sdk.String("praesentium"),
                },
            },
            UserPoolID: "voluptatibus",
            Username: "ipsa",
            ValidationData: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Ms. Karla Aufderhar",
                    Value: sdk.String("maiores"),
                },
                shared.AttributeType{
                    Name: "Stacy Gulgowski MD",
                    Value: sdk.String("enim"),
                },
                shared.AttributeType{
                    Name: "Mrs. Leslie VonRueden",
                    Value: sdk.String("molestias"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.AdminCreateUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminCreateUserResponse != nil {
        // handle response
    }
}
```

## AdminDeleteUser

<p>Deletes a user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminDeleteUser(ctx, operations.AdminDeleteUserRequest{
        AdminDeleteUserRequest: shared.AdminDeleteUserRequest{
            UserPoolID: "repudiandae",
            Username: "sint",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.AdminDeleteUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdminDeleteUserAttributes

<p>Deletes the user attributes in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminDeleteUserAttributes(ctx, operations.AdminDeleteUserAttributesRequest{
        AdminDeleteUserAttributesRequest: shared.AdminDeleteUserAttributesRequest{
            UserAttributeNames: []string{
                "deserunt",
            },
            UserPoolID: "distinctio",
            Username: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.AdminDeleteUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDeleteUserAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminDeleteUserAttributesResponse != nil {
        // handle response
    }
}
```

## AdminDisableProviderForUser

<p>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked <code>DestinationUser</code>, the user must create a new user account. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p> <p>This action is enabled only for admin access and requires developer credentials.</p> <p>The <code>ProviderName</code> must match the value specified when creating an IdP for the pool. </p> <p>To deactivate a native username + password user, the <code>ProviderName</code> value must be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code>. The <code>ProviderAttributeValue</code> must be the name that is used in the user pool for the user.</p> <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject that was used when the user was originally linked as a source user.</p> <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the <code>ProviderAttributeName</code> and <code>ProviderAttributeValue</code> must be the same values that were used for the <code>SourceUser</code> when the identities were originally linked using <code> AdminLinkProviderForUser</code> call. (If the linking was done with <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same applies here). However, if the user has already signed in, the <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the subject of the SAML assertion.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminDisableProviderForUser(ctx, operations.AdminDisableProviderForUserRequest{
        AdminDisableProviderForUserRequest: shared.AdminDisableProviderForUserRequest{
            User: shared.ProviderUserIdentifierType{
                ProviderAttributeName: sdk.String("magni"),
                ProviderAttributeValue: sdk.String("assumenda"),
                ProviderName: sdk.String("ipsam"),
            },
            UserPoolID: "alias",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.AdminDisableProviderForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDisableProviderForUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminDisableProviderForUserResponse != nil {
        // handle response
    }
}
```

## AdminDisableUser

<p>Deactivates a user and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to <code>GetUser</code> and <code>ListUsers</code> API requests.</p> <p>You must make this API request with Amazon Web Services credentials that have <code>cognito-idp:AdminDisableUser</code> permissions.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminDisableUser(ctx, operations.AdminDisableUserRequest{
        AdminDisableUserRequest: shared.AdminDisableUserRequest{
            UserPoolID: "delectus",
            Username: "eum",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.AdminDisableUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminDisableUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminDisableUserResponse != nil {
        // handle response
    }
}
```

## AdminEnableUser

<p>Enables the specified user as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminEnableUser(ctx, operations.AdminEnableUserRequest{
        AdminEnableUserRequest: shared.AdminEnableUserRequest{
            UserPoolID: "officia",
            Username: "dolor",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.AdminEnableUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminEnableUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminEnableUserResponse != nil {
        // handle response
    }
}
```

## AdminForgetDevice

<p>Forgets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminForgetDevice(ctx, operations.AdminForgetDeviceRequest{
        AdminForgetDeviceRequest: shared.AdminForgetDeviceRequest{
            DeviceKey: "rerum",
            UserPoolID: "dicta",
            Username: "magnam",
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.AdminForgetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminForgetDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdminGetDevice

<p>Gets the device, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminGetDevice(ctx, operations.AdminGetDeviceRequest{
        AdminGetDeviceRequest: shared.AdminGetDeviceRequest{
            DeviceKey: "occaecati",
            UserPoolID: "enim",
            Username: "accusamus",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.AdminGetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminGetDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminGetDeviceResponse != nil {
        // handle response
    }
}
```

## AdminGetUser

<p>Gets the specified user by user name in a user pool as an administrator. Works on any user.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminGetUser(ctx, operations.AdminGetUserRequest{
        AdminGetUserRequest: shared.AdminGetUserRequest{
            UserPoolID: "sapiente",
            Username: "amet",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.AdminGetUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminGetUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminGetUserResponse != nil {
        // handle response
    }
}
```

## AdminInitiateAuth

<p>Initiates the authentication flow, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminInitiateAuth(ctx, operations.AdminInitiateAuthRequest{
        AdminInitiateAuthRequest: shared.AdminInitiateAuthRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("nihil"),
            },
            AuthFlow: shared.AuthFlowTypeEnumRefreshToken,
            AuthParameters: map[string]string{
                "id": "labore",
                "labore": "suscipit",
                "natus": "nobis",
            },
            ClientID: "eum",
            ClientMetadata: map[string]string{
                "aspernatur": "architecto",
                "magnam": "et",
                "excepturi": "ullam",
                "provident": "quos",
            },
            ContextData: &shared.ContextDataType{
                EncodedData: sdk.String("sint"),
                HTTPHeaders: []shared.HTTPHeader{
                    shared.HTTPHeader{
                        HeaderName: sdk.String("mollitia"),
                        HeaderValue: sdk.String("reiciendis"),
                    },
                },
                IPAddress: "mollitia",
                ServerName: "ad",
                ServerPath: "eum",
            },
            UserPoolID: "dolor",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.AdminInitiateAuthXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminInitiateAuth,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminInitiateAuthResponse != nil {
        // handle response
    }
}
```

## AdminLinkProviderForUser

<p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an identity from an external IdP (<code>SourceUser</code>) based on a specified attribute name and value from the external IdP. This allows you to create a link from the existing user account to an external federated user identity that has not yet been used to sign in. You can then use the federated user identity to sign in as the existing user account. </p> <p> For example, if there is an existing user with a username and password, this API links that user to a federated user identity. When the user signs in with a federated user identity, they sign in as the existing user account.</p> <note> <p>The maximum number of federated identities linked to a user is five.</p> </note> <important> <p>Because this API allows a user with an external federated identity to sign in as an existing user in the user pool, it is critical that it only be used with external IdPs and provider attributes that have been trusted by the application owner.</p> </important> <p>This action is administrative and requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminLinkProviderForUser(ctx, operations.AdminLinkProviderForUserRequest{
        AdminLinkProviderForUserRequest: shared.AdminLinkProviderForUserRequest{
            DestinationUser: shared.ProviderUserIdentifierType{
                ProviderAttributeName: sdk.String("eius"),
                ProviderAttributeValue: sdk.String("maxime"),
                ProviderName: sdk.String("deleniti"),
            },
            SourceUser: shared.ProviderUserIdentifierType{
                ProviderAttributeName: sdk.String("facilis"),
                ProviderAttributeValue: sdk.String("in"),
                ProviderName: sdk.String("architecto"),
            },
            UserPoolID: "architecto",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.AdminLinkProviderForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminLinkProviderForUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminLinkProviderForUserResponse != nil {
        // handle response
    }
}
```

## AdminListDevices

<p>Lists devices, as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminListDevices(ctx, operations.AdminListDevicesRequest{
        AdminListDevicesRequest: shared.AdminListDevicesRequest{
            Limit: sdk.Int64(904648),
            PaginationToken: sdk.String("pariatur"),
            UserPoolID: "accusantium",
            Username: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.AdminListDevicesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListDevicesResponse != nil {
        // handle response
    }
}
```

## AdminListGroupsForUser

<p>Lists the groups that the user belongs to.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminListGroupsForUser(ctx, operations.AdminListGroupsForUserRequest{
        AdminListGroupsForUserRequest: shared.AdminListGroupsForUserRequest{
            Limit: sdk.Int64(807319),
            NextToken: sdk.String("ea"),
            UserPoolID: "excepturi",
            Username: "odit",
        },
        Limit: sdk.String("ea"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.AdminListGroupsForUserXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListGroupsForUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListGroupsForUserResponse != nil {
        // handle response
    }
}
```

## AdminListUserAuthEvents

A history of user activity and any risks detected as part of Amazon Cognito advanced security.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminListUserAuthEvents(ctx, operations.AdminListUserAuthEventsRequest{
        AdminListUserAuthEventsRequest: shared.AdminListUserAuthEventsRequest{
            MaxResults: sdk.Int64(50588),
            NextToken: sdk.String("pariatur"),
            UserPoolID: "nemo",
            Username: "voluptatibus",
        },
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("fugiat"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.AdminListUserAuthEventsXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminListUserAuthEvents,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListUserAuthEventsResponse != nil {
        // handle response
    }
}
```

## AdminRemoveUserFromGroup

<p>Removes the specified user from the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminRemoveUserFromGroup(ctx, operations.AdminRemoveUserFromGroupRequest{
        AdminRemoveUserFromGroupRequest: shared.AdminRemoveUserFromGroupRequest{
            GroupName: "dolores",
            UserPoolID: "quis",
            Username: "totam",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.AdminRemoveUserFromGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminRemoveUserFromGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdminResetUserPassword

<p>Resets the specified user's password in a user pool as an administrator. Works on any user.</p> <p>When a developer calls this API, the current password is invalidated, so it must be changed. If a user tries to sign in after the API is called, the app will get a PasswordResetRequiredException exception back and should direct the user down the flow to reset the password, which is the same as the forgot password flow. In addition, if the user pool has phone verification selected and a verified phone number exists for the user, or if email verification is selected and a verified email exists for the user, calling this API will also result in sending a message to the end user with the code to change their password.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminResetUserPassword(ctx, operations.AdminResetUserPasswordRequest{
        AdminResetUserPasswordRequest: shared.AdminResetUserPasswordRequest{
            ClientMetadata: map[string]string{
                "quam": "dolor",
                "vero": "nostrum",
                "hic": "recusandae",
                "omnis": "facilis",
            },
            UserPoolID: "perspiciatis",
            Username: "voluptatem",
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.AdminResetUserPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminResetUserPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminResetUserPasswordResponse != nil {
        // handle response
    }
}
```

## AdminRespondToAuthChallenge

<p>Responds to an authentication challenge, as an administrator.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminRespondToAuthChallenge(ctx, operations.AdminRespondToAuthChallengeRequest{
        AdminRespondToAuthChallengeRequest: shared.AdminRespondToAuthChallengeRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("adipisci"),
            },
            ChallengeName: shared.ChallengeNameTypeEnumNewPasswordRequired,
            ChallengeResponses: map[string]string{
                "modi": "iste",
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
            ClientID: "delectus",
            ClientMetadata: map[string]string{
                "quos": "aliquid",
                "dolorem": "dolorem",
            },
            ContextData: &shared.ContextDataType{
                EncodedData: sdk.String("dolor"),
                HTTPHeaders: []shared.HTTPHeader{
                    shared.HTTPHeader{
                        HeaderName: sdk.String("ipsum"),
                        HeaderValue: sdk.String("hic"),
                    },
                },
                IPAddress: "excepturi",
                ServerName: "cum",
                ServerPath: "voluptate",
            },
            Session: sdk.String("dignissimos"),
            UserPoolID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.AdminRespondToAuthChallengeXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminRespondToAuthChallengeResponse != nil {
        // handle response
    }
}
```

## AdminSetUserMFAPreference

The user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminSetUserMFAPreference(ctx, operations.AdminSetUserMFAPreferenceRequest{
        AdminSetUserMFAPreferenceRequest: shared.AdminSetUserMFAPreferenceRequest{
            SMSMfaSettings: &shared.SMSMfaSettingsType{
                Enabled: sdk.Bool(false),
                PreferredMfa: sdk.Bool(false),
            },
            SoftwareTokenMfaSettings: &shared.SoftwareTokenMfaSettingsType{
                Enabled: sdk.Bool(false),
                PreferredMfa: sdk.Bool(false),
            },
            UserPoolID: "odio",
            Username: "quaerat",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.AdminSetUserMFAPreferenceXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserMfaPreference,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminSetUserMFAPreferenceResponse != nil {
        // handle response
    }
}
```

## AdminSetUserPassword

<p>Sets the specified user's password in a user pool as an administrator. Works on any user. </p> <p>The password can be temporary or permanent. If it is temporary, the user status enters the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to sign in, the InitiateAuth/AdminInitiateAuth response will contain the <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in before it expires, the user won't be able to sign in, and an administrator must reset their password. </p> <p>Once the user has set a new password, or the password is permanent, the user status is set to <code>Confirmed</code>.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminSetUserPassword(ctx, operations.AdminSetUserPasswordRequest{
        AdminSetUserPasswordRequest: shared.AdminSetUserPasswordRequest{
            Password: "sit",
            Permanent: sdk.Bool(false),
            UserPoolID: "fugiat",
            Username: "ab",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.AdminSetUserPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminSetUserPasswordResponse != nil {
        // handle response
    }
}
```

## AdminSetUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminSetUserSettings(ctx, operations.AdminSetUserSettingsRequest{
        AdminSetUserSettingsRequest: shared.AdminSetUserSettingsRequest{
            MFAOptions: []shared.MFAOptionType{
                shared.MFAOptionType{
                    AttributeName: sdk.String("distinctio"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumEmail.ToPointer(),
                },
                shared.MFAOptionType{
                    AttributeName: sdk.String("nihil"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumSms.ToPointer(),
                },
                shared.MFAOptionType{
                    AttributeName: sdk.String("voluptate"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumEmail.ToPointer(),
                },
                shared.MFAOptionType{
                    AttributeName: sdk.String("saepe"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumSms.ToPointer(),
                },
            },
            UserPoolID: "aspernatur",
            Username: "perferendis",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.AdminSetUserSettingsXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminSetUserSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminSetUserSettingsResponse != nil {
        // handle response
    }
}
```

## AdminUpdateAuthEventFeedback

Provides feedback for an authentication event indicating if it was from a valid user. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminUpdateAuthEventFeedback(ctx, operations.AdminUpdateAuthEventFeedbackRequest{
        AdminUpdateAuthEventFeedbackRequest: shared.AdminUpdateAuthEventFeedbackRequest{
            EventID: "provident",
            FeedbackValue: shared.FeedbackValueTypeEnumValid,
            UserPoolID: "repellendus",
            Username: "totam",
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.AdminUpdateAuthEventFeedbackXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminUpdateAuthEventFeedbackResponse != nil {
        // handle response
    }
}
```

## AdminUpdateDeviceStatus

<p>Updates the device status as an administrator.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminUpdateDeviceStatus(ctx, operations.AdminUpdateDeviceStatusRequest{
        AdminUpdateDeviceStatusRequest: shared.AdminUpdateDeviceStatusRequest{
            DeviceKey: "officiis",
            DeviceRememberedStatus: shared.DeviceRememberedStatusTypeEnumRemembered.ToPointer(),
            UserPoolID: "dolorum",
            Username: "a",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.AdminUpdateDeviceStatusXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateDeviceStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminUpdateDeviceStatusResponse != nil {
        // handle response
    }
}
```

## AdminUpdateUserAttributes

<p>Updates the specified user's attributes, including developer attributes, as an administrator. Works on any user.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p> <p>In addition to updating user attributes, this API can also be used to mark phone and email as verified.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminUpdateUserAttributes(ctx, operations.AdminUpdateUserAttributesRequest{
        AdminUpdateUserAttributesRequest: shared.AdminUpdateUserAttributesRequest{
            ClientMetadata: map[string]string{
                "accusamus": "numquam",
                "enim": "dolorem",
                "sapiente": "totam",
            },
            UserAttributes: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Mamie Durgan",
                    Value: sdk.String("libero"),
                },
                shared.AttributeType{
                    Name: "Joanna Kohler",
                    Value: sdk.String("qui"),
                },
            },
            UserPoolID: "cupiditate",
            Username: "maxime",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.AdminUpdateUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUpdateUserAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminUpdateUserAttributesResponse != nil {
        // handle response
    }
}
```

## AdminUserGlobalSignOut

<p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. The user's current access and ID tokens remain valid until they expire. By default, access and ID tokens expire one hour after they're issued. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdminUserGlobalSignOut(ctx, operations.AdminUserGlobalSignOutRequest{
        AdminUserGlobalSignOutRequest: shared.AdminUserGlobalSignOutRequest{
            UserPoolID: "dolores",
            Username: "distinctio",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.AdminUserGlobalSignOutXAmzTargetEnumAwsCognitoIdentityProviderServiceAdminUserGlobalSignOut,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminUserGlobalSignOutResponse != nil {
        // handle response
    }
}
```

## AssociateSoftwareToken

<p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA) for a user, with a unique private key that Amazon Cognito generates and returns in the API response. You can authorize an <code>AssociateSoftwareToken</code> request with either the user's access token, or a session string from a challenge response that you received from Amazon Cognito.</p> <note> <p>Amazon Cognito disassociates an existing software token when you verify the new token in a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software token and your user pool doesn't require MFA, the user can then authenticate with user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge each time your user signs. Complete setup with <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p> <p>After you set up software token MFA for your user, Amazon Cognito generates a <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to this challenge with your user's TOTP.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateSoftwareToken(ctx, operations.AssociateSoftwareTokenRequest{
        AssociateSoftwareTokenRequest: shared.AssociateSoftwareTokenRequest{
            AccessToken: sdk.String("fugit"),
            Session: sdk.String("magni"),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.AssociateSoftwareTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceAssociateSoftwareToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateSoftwareTokenResponse != nil {
        // handle response
    }
}
```

## ChangePassword

Changes the password for a specified user in a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ChangePassword(ctx, operations.ChangePasswordRequest{
        ChangePasswordRequest: shared.ChangePasswordRequest{
            AccessToken: "soluta",
            PreviousPassword: "nobis",
            ProposedPassword: "et",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.ChangePasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceChangePassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangePasswordResponse != nil {
        // handle response
    }
}
```

## ConfirmDevice

Confirms tracking of the device. This API call is the call that begins device tracking.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmDevice(ctx, operations.ConfirmDeviceRequest{
        ConfirmDeviceRequest: shared.ConfirmDeviceRequest{
            AccessToken: "aperiam",
            DeviceKey: "delectus",
            DeviceName: sdk.String("dolorem"),
            DeviceSecretVerifierConfig: &shared.DeviceSecretVerifierConfigType{
                PasswordVerifier: sdk.String("dolore"),
                Salt: sdk.String("labore"),
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.ConfirmDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmDeviceResponse != nil {
        // handle response
    }
}
```

## ConfirmForgotPassword

Allows a user to enter a confirmation code to reset a forgotten password.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmForgotPassword(ctx, operations.ConfirmForgotPasswordRequest{
        ConfirmForgotPasswordRequest: shared.ConfirmForgotPasswordRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("consequatur"),
            },
            ClientID: "est",
            ClientMetadata: map[string]string{
                "porro": "doloribus",
                "ut": "facilis",
                "cupiditate": "qui",
                "quae": "laudantium",
            },
            ConfirmationCode: "odio",
            Password: "occaecati",
            SecretHash: sdk.String("voluptatibus"),
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("quisquam"),
                IPAddress: sdk.String("vero"),
            },
            Username: "omnis",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzTarget: operations.ConfirmForgotPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmForgotPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmForgotPasswordResponse != nil {
        // handle response
    }
}
```

## ConfirmSignUp

Confirms registration of a new user.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmSignUp(ctx, operations.ConfirmSignUpRequest{
        ConfirmSignUpRequest: shared.ConfirmSignUpRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("dignissimos"),
            },
            ClientID: "hic",
            ClientMetadata: map[string]string{
                "quod": "odio",
                "similique": "facilis",
                "vero": "ducimus",
            },
            ConfirmationCode: "dolore",
            ForceAliasCreation: sdk.Bool(false),
            SecretHash: sdk.String("quibusdam"),
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("illum"),
                IPAddress: sdk.String("sequi"),
            },
            Username: "natus",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ConfirmSignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceConfirmSignUp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmSignUpResponse != nil {
        // handle response
    }
}
```

## CreateGroup

<p>Creates a new group in the specified user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Description: sdk.String("maiores"),
            GroupName: "doloribus",
            Precedence: sdk.Int64(478370),
            RoleArn: sdk.String("eligendi"),
            UserPoolID: "ducimus",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.CreateGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## CreateIdentityProvider

Creates an IdP for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateIdentityProvider(ctx, operations.CreateIdentityProviderRequest{
        CreateIdentityProviderRequest: shared.CreateIdentityProviderRequest{
            AttributeMapping: map[string]string{
                "magnam": "ratione",
                "ex": "laudantium",
                "dicta": "dolor",
                "maiores": "quasi",
            },
            IdpIdentifiers: []string{
                "nulla",
                "excepturi",
            },
            ProviderDetails: map[string]string{
                "nostrum": "sapiente",
                "quisquam": "saepe",
                "ea": "impedit",
                "corporis": "veniam",
            },
            ProviderName: "aliquid",
            ProviderType: shared.IdentityProviderTypeTypeEnumSaml,
            UserPoolID: "magnam",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.CreateIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateIdentityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIdentityProviderResponse != nil {
        // handle response
    }
}
```

## CreateResourceServer

Creates a new OAuth2.0 resource server and defines custom scopes within it.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateResourceServer(ctx, operations.CreateResourceServerRequest{
        CreateResourceServerRequest: shared.CreateResourceServerRequest{
            Identifier: "a",
            Name: "Richard Anderson",
            Scopes: []shared.ResourceServerScopeType{
                shared.ResourceServerScopeType{
                    ScopeDescription: "fugit",
                    ScopeName: "accusamus",
                },
                shared.ResourceServerScopeType{
                    ScopeDescription: "inventore",
                    ScopeName: "non",
                },
            },
            UserPoolID: "et",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CreateResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateResourceServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceServerResponse != nil {
        // handle response
    }
}
```

## CreateUserImportJob

Creates the user import job.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUserImportJob(ctx, operations.CreateUserImportJobRequest{
        CreateUserImportJobRequest: shared.CreateUserImportJobRequest{
            CloudWatchLogsRoleArn: "quas",
            JobName: "assumenda",
            UserPoolID: "nulla",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.CreateUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserImportJobResponse != nil {
        // handle response
    }
}
```

## CreateUserPool

<p>Creates a new Amazon Cognito user pool and sets the password policy for the pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUserPool(ctx, operations.CreateUserPoolRequest{
        CreateUserPoolRequest: shared.CreateUserPoolRequest{
            AccountRecoverySetting: &shared.AccountRecoverySettingType{
                RecoveryMechanisms: []shared.RecoveryOptionType{
                    shared.RecoveryOptionType{
                        Name: shared.RecoveryOptionNameTypeEnumVerifiedPhoneNumber,
                        Priority: 301598,
                    },
                },
            },
            AdminCreateUserConfig: &shared.AdminCreateUserConfigType{
                AllowAdminCreateUserOnly: sdk.Bool(false),
                InviteMessageTemplate: &shared.MessageTemplateType{
                    EmailMessage: sdk.String("odio"),
                    EmailSubject: sdk.String("eius"),
                    SMSMessage: sdk.String("esse"),
                },
                UnusedAccountValidityDays: sdk.Int64(456141),
            },
            AliasAttributes: []shared.AliasAttributeTypeEnum{
                shared.AliasAttributeTypeEnumPreferredUsername,
                shared.AliasAttributeTypeEnumEmail,
                shared.AliasAttributeTypeEnumPreferredUsername,
            },
            AutoVerifiedAttributes: []shared.VerifiedAttributeTypeEnum{
                shared.VerifiedAttributeTypeEnumPhoneNumber,
                shared.VerifiedAttributeTypeEnumPhoneNumber,
                shared.VerifiedAttributeTypeEnumPhoneNumber,
                shared.VerifiedAttributeTypeEnumEmail,
            },
            DeletionProtection: shared.DeletionProtectionTypeEnumActive.ToPointer(),
            DeviceConfiguration: &shared.DeviceConfigurationType{
                ChallengeRequiredOnNewDevice: sdk.Bool(false),
                DeviceOnlyRememberedOnUserPrompt: sdk.Bool(false),
            },
            EmailConfiguration: &shared.EmailConfigurationType{
                ConfigurationSet: sdk.String("praesentium"),
                EmailSendingAccount: shared.EmailSendingAccountTypeEnumDeveloper.ToPointer(),
                From: sdk.String("veritatis"),
                ReplyToEmailAddress: sdk.String("ipsa"),
                SourceArn: sdk.String("id"),
            },
            EmailVerificationMessage: sdk.String("quidem"),
            EmailVerificationSubject: sdk.String("neque"),
            LambdaConfig: &shared.LambdaConfigType{
                CreateAuthChallenge: sdk.String("quo"),
                CustomEmailSender: &shared.CustomEmailLambdaVersionConfigType{
                    LambdaArn: "illum",
                    LambdaVersion: shared.CustomEmailSenderLambdaVersionTypeEnumV10,
                },
                CustomMessage: sdk.String("quo"),
                CustomSMSSender: &shared.CustomSMSLambdaVersionConfigType{
                    LambdaArn: "fuga",
                    LambdaVersion: shared.CustomSMSSenderLambdaVersionTypeEnumV10,
                },
                DefineAuthChallenge: sdk.String("eius"),
                KMSKeyID: sdk.String("eos"),
                PostAuthentication: sdk.String("voluptas"),
                PostConfirmation: sdk.String("ab"),
                PreAuthentication: sdk.String("cupiditate"),
                PreSignUp: sdk.String("consequatur"),
                PreTokenGeneration: sdk.String("tempora"),
                UserMigration: sdk.String("debitis"),
                VerifyAuthChallengeResponse: sdk.String("ipsam"),
            },
            MfaConfiguration: shared.UserPoolMfaTypeEnumOff.ToPointer(),
            Policies: &shared.UserPoolPolicyType{
                PasswordPolicy: &shared.PasswordPolicyType{
                    MinimumLength: sdk.Int64(197054),
                    RequireLowercase: sdk.Bool(false),
                    RequireNumbers: sdk.Bool(false),
                    RequireSymbols: sdk.Bool(false),
                    RequireUppercase: sdk.Bool(false),
                    TemporaryPasswordValidityDays: sdk.Int64(779192),
                },
            },
            PoolName: "esse",
            Schema: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumString.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Ms. Jermaine Kulas"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("accusamus"),
                        MinValue: sdk.String("aliquam"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("odio"),
                        MinLength: sdk.String("occaecati"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumNumber.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Todd Oberbrunner DDS"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("eum"),
                        MinValue: sdk.String("quas"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("praesentium"),
                        MinLength: sdk.String("consequuntur"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumDateTime.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Lee O'Conner"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("explicabo"),
                        MinValue: sdk.String("minima"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("nisi"),
                        MinLength: sdk.String("fugit"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumBoolean.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Norma Christiansen"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("atque"),
                        MinValue: sdk.String("et"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("esse"),
                        MinLength: sdk.String("eveniet"),
                    },
                },
            },
            SmsAuthenticationMessage: sdk.String("accusamus"),
            SmsConfiguration: &shared.SmsConfigurationType{
                ExternalID: sdk.String("veritatis"),
                SnsCallerArn: "esse",
                SnsRegion: sdk.String("quod"),
            },
            SmsVerificationMessage: sdk.String("nam"),
            UserAttributeUpdateSettings: &shared.UserAttributeUpdateSettingsType{
                AttributesRequireVerificationBeforeUpdate: []shared.VerifiedAttributeTypeEnum{
                    shared.VerifiedAttributeTypeEnumPhoneNumber,
                    shared.VerifiedAttributeTypeEnumPhoneNumber,
                    shared.VerifiedAttributeTypeEnumEmail,
                    shared.VerifiedAttributeTypeEnumPhoneNumber,
                },
            },
            UserPoolAddOns: &shared.UserPoolAddOnsType{
                AdvancedSecurityMode: shared.AdvancedSecurityModeTypeEnumEnforced,
            },
            UserPoolTags: map[string]string{
                "rerum": "occaecati",
                "minima": "distinctio",
            },
            UsernameAttributes: []shared.UsernameAttributeTypeEnum{
                shared.UsernameAttributeTypeEnumPhoneNumber,
                shared.UsernameAttributeTypeEnumEmail,
                shared.UsernameAttributeTypeEnumEmail,
                shared.UsernameAttributeTypeEnumPhoneNumber,
            },
            UsernameConfiguration: &shared.UsernameConfigurationType{
                CaseSensitive: false,
            },
            VerificationMessageTemplate: &shared.VerificationMessageTemplateType{
                DefaultEmailOption: shared.DefaultEmailOptionTypeEnumConfirmWithCode.ToPointer(),
                EmailMessage: sdk.String("consequuntur"),
                EmailMessageByLink: sdk.String("consequatur"),
                EmailSubject: sdk.String("minus"),
                EmailSubjectByLink: sdk.String("quaerat"),
                SmsMessage: sdk.String("sapiente"),
            },
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.CreateUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserPoolResponse != nil {
        // handle response
    }
}
```

## CreateUserPoolClient

<p>Creates the user pool client.</p> <p>When you create a new user pool client, token revocation is automatically activated. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUserPoolClient(ctx, operations.CreateUserPoolClientRequest{
        CreateUserPoolClientRequest: shared.CreateUserPoolClientRequest{
            AccessTokenValidity: sdk.Int64(457223),
            AllowedOAuthFlows: []shared.OAuthFlowTypeEnum{
                shared.OAuthFlowTypeEnumClientCredentials,
            },
            AllowedOAuthFlowsUserPoolClient: sdk.Bool(false),
            AllowedOAuthScopes: []string{
                "sint",
                "pariatur",
                "possimus",
            },
            AnalyticsConfiguration: &shared.AnalyticsConfigurationType{
                ApplicationArn: sdk.String("quia"),
                ApplicationID: sdk.String("eveniet"),
                ExternalID: sdk.String("asperiores"),
                RoleArn: sdk.String("facere"),
                UserDataShared: sdk.Bool(false),
            },
            AuthSessionValidity: sdk.Int64(85001),
            CallbackURLs: []string{
                "quasi",
            },
            ClientName: "similique",
            DefaultRedirectURI: sdk.String("culpa"),
            EnablePropagateAdditionalUserContextData: sdk.Bool(false),
            EnableTokenRevocation: sdk.Bool(false),
            ExplicitAuthFlows: []shared.ExplicitAuthFlowsTypeEnum{
                shared.ExplicitAuthFlowsTypeEnumAllowRefreshTokenAuth,
                shared.ExplicitAuthFlowsTypeEnumAdminNoSrpAuth,
            },
            GenerateSecret: sdk.Bool(false),
            IDTokenValidity: sdk.Int64(936747),
            LogoutURLs: []string{
                "in",
                "eius",
            },
            PreventUserExistenceErrors: shared.PreventUserExistenceErrorTypesEnumEnabled.ToPointer(),
            ReadAttributes: []string{
                "soluta",
                "accusantium",
                "aliquam",
                "sapiente",
            },
            RefreshTokenValidity: sdk.Int64(119771),
            SupportedIdentityProviders: []string{
                "reprehenderit",
                "ullam",
            },
            TokenValidityUnits: &shared.TokenValidityUnitsType{
                AccessToken: shared.TimeUnitsTypeEnumMinutes.ToPointer(),
                IDToken: shared.TimeUnitsTypeEnumSeconds.ToPointer(),
                RefreshToken: shared.TimeUnitsTypeEnumHours.ToPointer(),
            },
            UserPoolID: "qui",
            WriteAttributes: []string{
                "ex",
                "deleniti",
                "itaque",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.CreateUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserPoolClient,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserPoolClientResponse != nil {
        // handle response
    }
}
```

## CreateUserPoolDomain

Creates a new domain for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateUserPoolDomain(ctx, operations.CreateUserPoolDomainRequest{
        CreateUserPoolDomainRequest: shared.CreateUserPoolDomainRequest{
            CustomDomainConfig: &shared.CustomDomainConfigType{
                CertificateArn: "ipsa",
            },
            Domain: "minima",
            UserPoolID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.CreateUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserPoolDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserPoolDomainResponse != nil {
        // handle response
    }
}
```

## DeleteGroup

<p>Deletes a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        DeleteGroupRequest: shared.DeleteGroupRequest{
            GroupName: "laudantium",
            UserPoolID: "eum",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DeleteGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteIdentityProvider

Deletes an IdP for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteIdentityProvider(ctx, operations.DeleteIdentityProviderRequest{
        DeleteIdentityProviderRequest: shared.DeleteIdentityProviderRequest{
            ProviderName: "numquam",
            UserPoolID: "impedit",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteIdentityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteResourceServer

Deletes a resource server.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourceServer(ctx, operations.DeleteResourceServerRequest{
        DeleteResourceServerRequest: shared.DeleteResourceServerRequest{
            Identifier: "velit",
            UserPoolID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DeleteResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteResourceServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUser

Allows a user to delete himself or herself.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            AccessToken: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserAttributes

Deletes the attributes for a user.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUserAttributes(ctx, operations.DeleteUserAttributesRequest{
        DeleteUserAttributesRequest: shared.DeleteUserAttributesRequest{
            AccessToken: "porro",
            UserAttributeNames: []string{
                "labore",
                "ab",
                "adipisci",
                "fuga",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserAttributesResponse != nil {
        // handle response
    }
}
```

## DeleteUserPool

Deletes the specified Amazon Cognito user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUserPool(ctx, operations.DeleteUserPoolRequest{
        DeleteUserPoolRequest: shared.DeleteUserPoolRequest{
            UserPoolID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserPoolClient

Allows the developer to delete the user pool client.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUserPoolClient(ctx, operations.DeleteUserPoolClientRequest{
        DeleteUserPoolClientRequest: shared.DeleteUserPoolClientRequest{
            ClientID: "cum",
            UserPoolID: "commodi",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPoolClient,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserPoolDomain

Deletes a domain for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteUserPoolDomain(ctx, operations.DeleteUserPoolDomainRequest{
        DeleteUserPoolDomainRequest: shared.DeleteUserPoolDomainRequest{
            Domain: "aperiam",
            UserPoolID: "cum",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DeleteUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceDeleteUserPoolDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserPoolDomainResponse != nil {
        // handle response
    }
}
```

## DescribeIdentityProvider

Gets information about a specific IdP.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeIdentityProvider(ctx, operations.DescribeIdentityProviderRequest{
        DescribeIdentityProviderRequest: shared.DescribeIdentityProviderRequest{
            ProviderName: "suscipit",
            UserPoolID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeIdentityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIdentityProviderResponse != nil {
        // handle response
    }
}
```

## DescribeResourceServer

Describes a resource server.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeResourceServer(ctx, operations.DescribeResourceServerRequest{
        DescribeResourceServerRequest: shared.DescribeResourceServerRequest{
            Identifier: "non",
            UserPoolID: "amet",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.DescribeResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeResourceServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourceServerResponse != nil {
        // handle response
    }
}
```

## DescribeRiskConfiguration

Describes the risk configuration.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRiskConfiguration(ctx, operations.DescribeRiskConfigurationRequest{
        DescribeRiskConfigurationRequest: shared.DescribeRiskConfigurationRequest{
            ClientID: sdk.String("laboriosam"),
            UserPoolID: "ipsa",
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DescribeRiskConfigurationXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeRiskConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRiskConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeUserImportJob

Describes the user import job.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserImportJob(ctx, operations.DescribeUserImportJobRequest{
        DescribeUserImportJobRequest: shared.DescribeUserImportJobRequest{
            JobID: "voluptas",
            UserPoolID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserImportJobResponse != nil {
        // handle response
    }
}
```

## DescribeUserPool

Returns the configuration information and metadata of the specified user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserPool(ctx, operations.DescribeUserPoolRequest{
        DescribeUserPoolRequest: shared.DescribeUserPoolRequest{
            UserPoolID: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserPoolResponse != nil {
        // handle response
    }
}
```

## DescribeUserPoolClient

Client method for returning the configuration information and metadata of the specified user pool app client.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserPoolClient(ctx, operations.DescribeUserPoolClientRequest{
        DescribeUserPoolClientRequest: shared.DescribeUserPoolClientRequest{
            ClientID: "cum",
            UserPoolID: "blanditiis",
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DescribeUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPoolClient,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserPoolClientResponse != nil {
        // handle response
    }
}
```

## DescribeUserPoolDomain

Gets information about a domain.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeUserPoolDomain(ctx, operations.DescribeUserPoolDomainRequest{
        DescribeUserPoolDomainRequest: shared.DescribeUserPoolDomainRequest{
            Domain: "hic",
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DescribeUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPoolDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserPoolDomainResponse != nil {
        // handle response
    }
}
```

## ForgetDevice

Forgets the specified device.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ForgetDevice(ctx, operations.ForgetDeviceRequest{
        ForgetDeviceRequest: shared.ForgetDeviceRequest{
            AccessToken: sdk.String("asperiores"),
            DeviceKey: "facilis",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.ForgetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceForgetDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ForgotPassword

<p>Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password. For the <code>Username</code> parameter, you can use the username or user alias. The method used to send the confirmation code is sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>. If neither a verified phone number nor a verified email exists, an <code>InvalidParameterException</code> is thrown. To use the confirmation code for resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ForgotPassword(ctx, operations.ForgotPasswordRequest{
        ForgotPasswordRequest: shared.ForgotPasswordRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("in"),
            },
            ClientID: "commodi",
            ClientMetadata: map[string]string{
                "explicabo": "voluptas",
                "unde": "architecto",
                "suscipit": "sapiente",
            },
            SecretHash: sdk.String("debitis"),
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("illo"),
                IPAddress: sdk.String("reiciendis"),
            },
            Username: "perferendis",
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ForgotPasswordXAmzTargetEnumAwsCognitoIdentityProviderServiceForgotPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ForgotPasswordResponse != nil {
        // handle response
    }
}
```

## GetCSVHeader

Gets the header information for the comma-separated value (CSV) file to be used as input for the user import job.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCSVHeader(ctx, operations.GetCSVHeaderRequest{
        GetCSVHeaderRequest: shared.GetCSVHeaderRequest{
            UserPoolID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.GetCSVHeaderXAmzTargetEnumAwsCognitoIdentityProviderServiceGetCsvHeader,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCSVHeaderResponse != nil {
        // handle response
    }
}
```

## GetDevice

Gets the device.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDevice(ctx, operations.GetDeviceRequest{
        GetDeviceRequest: shared.GetDeviceRequest{
            AccessToken: sdk.String("reiciendis"),
            DeviceKey: "ex",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.GetDeviceXAmzTargetEnumAwsCognitoIdentityProviderServiceGetDevice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceResponse != nil {
        // handle response
    }
}
```

## GetGroup

<p>Gets a group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetGroup(ctx, operations.GetGroupRequest{
        GetGroupRequest: shared.GetGroupRequest{
            GroupName: "ipsam",
            UserPoolID: "debitis",
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.GetGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceGetGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroupResponse != nil {
        // handle response
    }
}
```

## GetIdentityProviderByIdentifier

Gets the specified IdP.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetIdentityProviderByIdentifier(ctx, operations.GetIdentityProviderByIdentifierRequest{
        GetIdentityProviderByIdentifierRequest: shared.GetIdentityProviderByIdentifierRequest{
            IdpIdentifier: "reiciendis",
            UserPoolID: "nulla",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.GetIdentityProviderByIdentifierXAmzTargetEnumAwsCognitoIdentityProviderServiceGetIdentityProviderByIdentifier,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIdentityProviderByIdentifierResponse != nil {
        // handle response
    }
}
```

## GetSigningCertificate

<p>This method takes a user pool ID, and returns the signing certificate. The issued certificate is valid for 10 years from the date of issue.</p> <p>Amazon Cognito issues and assigns a new signing certificate annually. This process returns a new value in the response to <code>GetSigningCertificate</code>, but doesn't invalidate the original certificate.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSigningCertificate(ctx, operations.GetSigningCertificateRequest{
        GetSigningCertificateRequest: shared.GetSigningCertificateRequest{
            UserPoolID: "beatae",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.GetSigningCertificateXAmzTargetEnumAwsCognitoIdentityProviderServiceGetSigningCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSigningCertificateResponse != nil {
        // handle response
    }
}
```

## GetUICustomization

Gets the user interface (UI) Customization information for a particular app client's app UI, if any such information exists for the client. If nothing is set for the particular client, but there is an existing pool level customization (the app <code>clientId</code> is <code>ALL</code>), then that information is returned. If nothing is present, then an empty shape is returned.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUICustomization(ctx, operations.GetUICustomizationRequest{
        GetUICustomizationRequest: shared.GetUICustomizationRequest{
            ClientID: sdk.String("error"),
            UserPoolID: "hic",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.GetUICustomizationXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUICustomization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUICustomizationResponse != nil {
        // handle response
    }
}
```

## GetUser

Gets the user attributes and metadata for a user.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUser(ctx, operations.GetUserRequest{
        GetUserRequest: shared.GetUserRequest{
            AccessToken: "corrupti",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.GetUserXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserResponse != nil {
        // handle response
    }
}
```

## GetUserAttributeVerificationCode

<p>Generates a user attribute verification code for the specified attribute name. Sends a message to a user with a code that they must return in a VerifyUserAttribute request.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUserAttributeVerificationCode(ctx, operations.GetUserAttributeVerificationCodeRequest{
        GetUserAttributeVerificationCodeRequest: shared.GetUserAttributeVerificationCodeRequest{
            AccessToken: "culpa",
            AttributeName: "expedita",
            ClientMetadata: map[string]string{
                "consequatur": "esse",
                "ipsam": "sit",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.GetUserAttributeVerificationCodeXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUserAttributeVerificationCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserAttributeVerificationCodeResponse != nil {
        // handle response
    }
}
```

## GetUserPoolMfaConfig

Gets the user pool multi-factor authentication (MFA) configuration.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetUserPoolMfaConfig(ctx, operations.GetUserPoolMfaConfigRequest{
        GetUserPoolMfaConfigRequest: shared.GetUserPoolMfaConfigRequest{
            UserPoolID: "sed",
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.GetUserPoolMfaConfigXAmzTargetEnumAwsCognitoIdentityProviderServiceGetUserPoolMfaConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserPoolMfaConfigResponse != nil {
        // handle response
    }
}
```

## GlobalSignOut

Signs out users from all devices. It also invalidates all refresh tokens that Amazon Cognito has issued to a user. A user can still use a hosted UI cookie to retrieve new tokens for the duration of the 1-hour cookie validity period.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GlobalSignOut(ctx, operations.GlobalSignOutRequest{
        GlobalSignOutRequest: shared.GlobalSignOutRequest{
            AccessToken: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.GlobalSignOutXAmzTargetEnumAwsCognitoIdentityProviderServiceGlobalSignOut,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalSignOutResponse != nil {
        // handle response
    }
}
```

## InitiateAuth

<p>Initiates sign-in for a user in the Amazon Cognito user directory. You can't sign in a user with a federated IdP with <code>InitiateAuth</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html"> Adding user pool sign-in through a third party</a>.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.InitiateAuth(ctx, operations.InitiateAuthRequest{
        InitiateAuthRequest: shared.InitiateAuthRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("atque"),
            },
            AuthFlow: shared.AuthFlowTypeEnumAdminNoSrpAuth,
            AuthParameters: map[string]string{
                "tenetur": "laboriosam",
                "alias": "amet",
                "deserunt": "voluptate",
            },
            ClientID: "unde",
            ClientMetadata: map[string]string{
                "provident": "repellendus",
                "delectus": "voluptates",
                "perferendis": "est",
                "quidem": "reprehenderit",
            },
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("facere"),
                IPAddress: sdk.String("fuga"),
            },
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.InitiateAuthXAmzTargetEnumAwsCognitoIdentityProviderServiceInitiateAuth,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InitiateAuthResponse != nil {
        // handle response
    }
}
```

## ListDevices

Lists the sign-in devices that Amazon Cognito has registered to the current user.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDevices(ctx, operations.ListDevicesRequest{
        ListDevicesRequest: shared.ListDevicesRequest{
            AccessToken: "atque",
            Limit: sdk.Int64(442036),
            PaginationToken: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.ListDevicesXAmzTargetEnumAwsCognitoIdentityProviderServiceListDevices,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevicesResponse != nil {
        // handle response
    }
}
```

## ListGroups

<p>Lists the groups associated with a user pool.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListGroups(ctx, operations.ListGroupsRequest{
        Limit: sdk.String("assumenda"),
        ListGroupsRequest: shared.ListGroupsRequest{
            Limit: sdk.Int64(410301),
            NextToken: sdk.String("atque"),
            UserPoolID: "error",
        },
        NextToken: sdk.String("officiis"),
        XAmzAlgorithm: sdk.String("officiis"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.ListGroupsXAmzTargetEnumAwsCognitoIdentityProviderServiceListGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## ListIdentityProviders

Lists information about all IdPs for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListIdentityProviders(ctx, operations.ListIdentityProvidersRequest{
        ListIdentityProvidersRequest: shared.ListIdentityProvidersRequest{
            MaxResults: sdk.Int64(544647),
            NextToken: sdk.String("at"),
            UserPoolID: "error",
        },
        MaxResults: sdk.String("blanditiis"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ListIdentityProvidersXAmzTargetEnumAwsCognitoIdentityProviderServiceListIdentityProviders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIdentityProvidersResponse != nil {
        // handle response
    }
}
```

## ListResourceServers

Lists the resource servers for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResourceServers(ctx, operations.ListResourceServersRequest{
        ListResourceServersRequest: shared.ListResourceServersRequest{
            MaxResults: sdk.Int64(287119),
            NextToken: sdk.String("reiciendis"),
            UserPoolID: "doloremque",
        },
        MaxResults: sdk.String("repudiandae"),
        NextToken: sdk.String("dicta"),
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.ListResourceServersXAmzTargetEnumAwsCognitoIdentityProviderServiceListResourceServers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceServersResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito user pool.</p> <p>A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "molestias",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsCognitoIdentityProviderServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUserImportJobs

Lists the user import jobs.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUserImportJobs(ctx, operations.ListUserImportJobsRequest{
        ListUserImportJobsRequest: shared.ListUserImportJobsRequest{
            MaxResults: 238043,
            PaginationToken: sdk.String("eveniet"),
            UserPoolID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("illo"),
        XAmzTarget: operations.ListUserImportJobsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserImportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserImportJobsResponse != nil {
        // handle response
    }
}
```

## ListUserPoolClients

Lists the clients that have been created for the specified user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUserPoolClients(ctx, operations.ListUserPoolClientsRequest{
        ListUserPoolClientsRequest: shared.ListUserPoolClientsRequest{
            MaxResults: sdk.Int64(361306),
            NextToken: sdk.String("quidem"),
            UserPoolID: "eveniet",
        },
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.ListUserPoolClientsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserPoolClients,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserPoolClientsResponse != nil {
        // handle response
    }
}
```

## ListUserPools

Lists the user pools associated with an Amazon Web Services account.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUserPools(ctx, operations.ListUserPoolsRequest{
        ListUserPoolsRequest: shared.ListUserPoolsRequest{
            MaxResults: 184362,
            NextToken: sdk.String("cum"),
        },
        MaxResults: sdk.String("iure"),
        NextToken: sdk.String("necessitatibus"),
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.ListUserPoolsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserPools,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserPoolsResponse != nil {
        // handle response
    }
}
```

## ListUsers

Lists the users in the Amazon Cognito user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUsers(ctx, operations.ListUsersRequest{
        Limit: sdk.String("repellat"),
        ListUsersRequest: shared.ListUsersRequest{
            AttributesToGet: []string{
                "corporis",
            },
            Filter: sdk.String("perspiciatis"),
            Limit: sdk.Int64(470649),
            PaginationToken: sdk.String("mollitia"),
            UserPoolID: "voluptas",
        },
        PaginationToken: sdk.String("alias"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListUsersXAmzTargetEnumAwsCognitoIdentityProviderServiceListUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## ListUsersInGroup

<p>Lists the users in the specified group.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListUsersInGroup(ctx, operations.ListUsersInGroupRequest{
        Limit: sdk.String("nesciunt"),
        ListUsersInGroupRequest: shared.ListUsersInGroupRequest{
            GroupName: "quae",
            Limit: sdk.Int64(925703),
            NextToken: sdk.String("omnis"),
            UserPoolID: "quaerat",
        },
        NextToken: sdk.String("molestiae"),
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.ListUsersInGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceListUsersInGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersInGroupResponse != nil {
        // handle response
    }
}
```

## ResendConfirmationCode

<p>Resends the confirmation (for confirmation of registration) to a specific user in the user pool.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ResendConfirmationCode(ctx, operations.ResendConfirmationCodeRequest{
        ResendConfirmationCodeRequest: shared.ResendConfirmationCodeRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("nemo"),
            },
            ClientID: "recusandae",
            ClientMetadata: map[string]string{
                "provident": "quis",
                "eum": "reiciendis",
            },
            SecretHash: sdk.String("provident"),
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("aspernatur"),
                IPAddress: sdk.String("ullam"),
            },
            Username: "quasi",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.ResendConfirmationCodeXAmzTargetEnumAwsCognitoIdentityProviderServiceResendConfirmationCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResendConfirmationCodeResponse != nil {
        // handle response
    }
}
```

## RespondToAuthChallenge

<p>Responds to the authentication challenge.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RespondToAuthChallenge(ctx, operations.RespondToAuthChallengeRequest{
        RespondToAuthChallengeRequest: shared.RespondToAuthChallengeRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("aliquid"),
            },
            ChallengeName: shared.ChallengeNameTypeEnumSmsMfa,
            ChallengeResponses: map[string]string{
                "doloribus": "ullam",
                "in": "nam",
                "earum": "officia",
                "laborum": "placeat",
            },
            ClientID: "modi",
            ClientMetadata: map[string]string{
                "molestias": "officiis",
                "sapiente": "cumque",
                "vitae": "rerum",
                "tempora": "quis",
            },
            Session: sdk.String("inventore"),
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("fugit"),
                IPAddress: sdk.String("cumque"),
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.RespondToAuthChallengeXAmzTargetEnumAwsCognitoIdentityProviderServiceRespondToAuthChallenge,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RespondToAuthChallengeResponse != nil {
        // handle response
    }
}
```

## RevokeToken

Revokes all of the access tokens generated by, and at the same time as, the specified refresh token. After a token is revoked, you can't use the revoked token to access Amazon Cognito user APIs, or to authorize access to your resource server.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RevokeToken(ctx, operations.RevokeTokenRequest{
        RevokeTokenRequest: shared.RevokeTokenRequest{
            ClientID: "at",
            ClientSecret: sdk.String("impedit"),
            Token: "eos",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.RevokeTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceRevokeToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevokeTokenResponse != nil {
        // handle response
    }
}
```

## SetRiskConfiguration

<p>Configures actions on detected risks. To delete the risk configuration for <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four configuration types.</p> <p>To activate Amazon Cognito advanced security features, update the user pool to include the <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetRiskConfiguration(ctx, operations.SetRiskConfigurationRequest{
        SetRiskConfigurationRequest: shared.SetRiskConfigurationRequest{
            AccountTakeoverRiskConfiguration: &shared.AccountTakeoverRiskConfigurationType{
                Actions: shared.AccountTakeoverActionsType{
                    HighAction: &shared.AccountTakeoverActionType{
                        EventAction: shared.AccountTakeoverEventActionTypeEnumNoAction,
                        Notify: false,
                    },
                    LowAction: &shared.AccountTakeoverActionType{
                        EventAction: shared.AccountTakeoverEventActionTypeEnumMfaRequired,
                        Notify: false,
                    },
                    MediumAction: &shared.AccountTakeoverActionType{
                        EventAction: shared.AccountTakeoverEventActionTypeEnumNoAction,
                        Notify: false,
                    },
                },
                NotifyConfiguration: &shared.NotifyConfigurationType{
                    BlockEmail: &shared.NotifyEmailType{
                        HTMLBody: sdk.String("illum"),
                        Subject: "eaque",
                        TextBody: sdk.String("earum"),
                    },
                    From: sdk.String("perspiciatis"),
                    MfaEmail: &shared.NotifyEmailType{
                        HTMLBody: sdk.String("maiores"),
                        Subject: "debitis",
                        TextBody: sdk.String("aliquid"),
                    },
                    NoActionEmail: &shared.NotifyEmailType{
                        HTMLBody: sdk.String("porro"),
                        Subject: "suscipit",
                        TextBody: sdk.String("dolorem"),
                    },
                    ReplyTo: sdk.String("fugit"),
                    SourceArn: "cumque",
                },
            },
            ClientID: sdk.String("fuga"),
            CompromisedCredentialsRiskConfiguration: &shared.CompromisedCredentialsRiskConfigurationType{
                Actions: shared.CompromisedCredentialsActionsType{
                    EventAction: shared.CompromisedCredentialsEventActionTypeEnumBlock,
                },
                EventFilter: []shared.EventFilterTypeEnum{
                    shared.EventFilterTypeEnumSignUp,
                    shared.EventFilterTypeEnumSignUp,
                    shared.EventFilterTypeEnumSignIn,
                },
            },
            RiskExceptionConfiguration: &shared.RiskExceptionConfigurationType{
                BlockedIPRangeList: []string{
                    "et",
                },
                SkippedIPRangeList: []string{
                    "natus",
                    "occaecati",
                },
            },
            UserPoolID: "suscipit",
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.SetRiskConfigurationXAmzTargetEnumAwsCognitoIdentityProviderServiceSetRiskConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetRiskConfigurationResponse != nil {
        // handle response
    }
}
```

## SetUICustomization

<p>Sets the user interface (UI) customization information for a user pool's built-in app UI.</p> <p>You can specify app UI customization settings for a single client (with a specific <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is used for every client that has no previously set UI customization. If you specify UI customization settings for a particular client, it will no longer return to the <code>ALL</code> configuration.</p> <note> <p>To use this API, your user pool must have a domain associated with it. Otherwise, there is no place to host the app's pages, and the service will throw an error.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetUICustomization(ctx, operations.SetUICustomizationRequest{
        SetUICustomizationRequest: shared.SetUICustomizationRequest{
            CSS: sdk.String("tempora"),
            ClientID: sdk.String("nihil"),
            ImageFile: sdk.String("molestiae"),
            UserPoolID: "dicta",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.SetUICustomizationXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUICustomization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetUICustomizationResponse != nil {
        // handle response
    }
}
```

## SetUserMFAPreference

Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetUserMFAPreference(ctx, operations.SetUserMFAPreferenceRequest{
        SetUserMFAPreferenceRequest: shared.SetUserMFAPreferenceRequest{
            AccessToken: "fugiat",
            SMSMfaSettings: &shared.SMSMfaSettingsType{
                Enabled: sdk.Bool(false),
                PreferredMfa: sdk.Bool(false),
            },
            SoftwareTokenMfaSettings: &shared.SoftwareTokenMfaSettingsType{
                Enabled: sdk.Bool(false),
                PreferredMfa: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.SetUserMFAPreferenceXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserMfaPreference,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetUserMFAPreferenceResponse != nil {
        // handle response
    }
}
```

## SetUserPoolMfaConfig

<p>Sets the user pool multi-factor authentication (MFA) configuration.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetUserPoolMfaConfig(ctx, operations.SetUserPoolMfaConfigRequest{
        SetUserPoolMfaConfigRequest: shared.SetUserPoolMfaConfigRequest{
            MfaConfiguration: shared.UserPoolMfaTypeEnumOn.ToPointer(),
            SmsMfaConfiguration: &shared.SmsMfaConfigType{
                SmsAuthenticationMessage: sdk.String("ipsa"),
                SmsConfiguration: &shared.SmsConfigurationType{
                    ExternalID: sdk.String("laborum"),
                    SnsCallerArn: "sunt",
                    SnsRegion: sdk.String("nostrum"),
                },
            },
            SoftwareTokenMfaConfiguration: &shared.SoftwareTokenMfaConfigType{
                Enabled: sdk.Bool(false),
            },
            UserPoolID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.SetUserPoolMfaConfigXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserPoolMfaConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetUserPoolMfaConfigResponse != nil {
        // handle response
    }
}
```

## SetUserSettings

 <i>This action is no longer supported.</i> You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html">SetUserMFAPreference</a> instead.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SetUserSettings(ctx, operations.SetUserSettingsRequest{
        SetUserSettingsRequest: shared.SetUserSettingsRequest{
            AccessToken: "voluptas",
            MFAOptions: []shared.MFAOptionType{
                shared.MFAOptionType{
                    AttributeName: sdk.String("id"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumSms.ToPointer(),
                },
                shared.MFAOptionType{
                    AttributeName: sdk.String("error"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumEmail.ToPointer(),
                },
                shared.MFAOptionType{
                    AttributeName: sdk.String("voluptates"),
                    DeliveryMedium: shared.DeliveryMediumTypeEnumEmail.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("vitae"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.SetUserSettingsXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUserSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetUserSettingsResponse != nil {
        // handle response
    }
}
```

## SignUp

<p>Registers the user in the specified user pool and creates a user name, password, and user attributes.</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SignUp(ctx, operations.SignUpRequest{
        SignUpRequest: shared.SignUpRequest{
            AnalyticsMetadata: &shared.AnalyticsMetadataType{
                AnalyticsEndpointID: sdk.String("ex"),
            },
            ClientID: "quo",
            ClientMetadata: map[string]string{
                "ut": "ad",
                "expedita": "voluptatem",
            },
            Password: "molestias",
            SecretHash: sdk.String("cum"),
            UserAttributes: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Miss Nora Moen",
                    Value: sdk.String("culpa"),
                },
                shared.AttributeType{
                    Name: "Miss Miranda Towne",
                    Value: sdk.String("debitis"),
                },
            },
            UserContextData: &shared.UserContextDataType{
                EncodedData: sdk.String("voluptatem"),
                IPAddress: sdk.String("alias"),
            },
            Username: "deleniti",
            ValidationData: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Miranda Ledner",
                    Value: sdk.String("asperiores"),
                },
                shared.AttributeType{
                    Name: "Marion Aufderhar",
                    Value: sdk.String("impedit"),
                },
                shared.AttributeType{
                    Name: "Alton Hintz",
                    Value: sdk.String("aliquam"),
                },
                shared.AttributeType{
                    Name: "Cassandra Bogan",
                    Value: sdk.String("consequatur"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.SignUpXAmzTargetEnumAwsCognitoIdentityProviderServiceSignUp,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SignUpResponse != nil {
        // handle response
    }
}
```

## StartUserImportJob

Starts the user import.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartUserImportJob(ctx, operations.StartUserImportJobRequest{
        StartUserImportJobRequest: shared.StartUserImportJobRequest{
            JobID: "dolor",
            UserPoolID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.StartUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceStartUserImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartUserImportJobResponse != nil {
        // handle response
    }
}
```

## StopUserImportJob

Stops the user import job.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopUserImportJob(ctx, operations.StopUserImportJobRequest{
        StopUserImportJobRequest: shared.StopUserImportJobRequest{
            JobID: "esse",
            UserPoolID: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.StopUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceStopUserImportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopUserImportJobResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns a set of tags to an Amazon Cognito user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of a user pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both user pools. The value of this key might be <code>Test</code> for one user pool, and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your user pools. In an Identity and Access Management policy, you can constrain permissions for user pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. A user pool can have as many as 50 tags.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "magnam",
            Tags: map[string]string{
                "ab": "porro",
                "autem": "nobis",
            },
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsCognitoIdentityProviderServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes the specified tags from an Amazon Cognito user pool. You can use this action up to 5 times per second, per account.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "nisi",
            TagKeys: []string{
                "vero",
                "est",
                "harum",
                "sequi",
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsCognitoIdentityProviderServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAuthEventFeedback

Provides the feedback for an authentication event, whether it was from a valid user or not. This feedback is used for improving the risk evaluation decision for the user pool as part of Amazon Cognito advanced security.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAuthEventFeedback(ctx, operations.UpdateAuthEventFeedbackRequest{
        UpdateAuthEventFeedbackRequest: shared.UpdateAuthEventFeedbackRequest{
            EventID: "officia",
            FeedbackToken: "voluptas",
            FeedbackValue: shared.FeedbackValueTypeEnumValid,
            UserPoolID: "nemo",
            Username: "quos",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.UpdateAuthEventFeedbackXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateAuthEventFeedback,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAuthEventFeedbackResponse != nil {
        // handle response
    }
}
```

## UpdateDeviceStatus

Updates the device status.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDeviceStatus(ctx, operations.UpdateDeviceStatusRequest{
        UpdateDeviceStatusRequest: shared.UpdateDeviceStatusRequest{
            AccessToken: "quasi",
            DeviceKey: "rem",
            DeviceRememberedStatus: shared.DeviceRememberedStatusTypeEnumNotRemembered.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateDeviceStatusXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateDeviceStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceStatusResponse != nil {
        // handle response
    }
}
```

## UpdateGroup

<p>Updates the specified group with the specified attributes.</p> <p>Calling this action requires developer credentials.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateGroup(ctx, operations.UpdateGroupRequest{
        UpdateGroupRequest: shared.UpdateGroupRequest{
            Description: sdk.String("soluta"),
            GroupName: "alias",
            Precedence: sdk.Int64(608989),
            RoleArn: sdk.String("eos"),
            UserPoolID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.UpdateGroupXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroupResponse != nil {
        // handle response
    }
}
```

## UpdateIdentityProvider

Updates IdP information for a user pool.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateIdentityProvider(ctx, operations.UpdateIdentityProviderRequest{
        UpdateIdentityProviderRequest: shared.UpdateIdentityProviderRequest{
            AttributeMapping: map[string]string{
                "delectus": "minima",
                "praesentium": "maxime",
                "magnam": "temporibus",
            },
            IdpIdentifiers: []string{
                "commodi",
                "itaque",
                "commodi",
            },
            ProviderDetails: map[string]string{
                "earum": "modi",
                "nam": "vero",
                "voluptatem": "ipsam",
            },
            ProviderName: "vel",
            UserPoolID: "alias",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.UpdateIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateIdentityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIdentityProviderResponse != nil {
        // handle response
    }
}
```

## UpdateResourceServer

<p>Updates the name and scopes of resource server. All other fields are read-only.</p> <important> <p>If you don't provide a value for an attribute, it is set to the default value.</p> </important>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateResourceServer(ctx, operations.UpdateResourceServerRequest{
        UpdateResourceServerRequest: shared.UpdateResourceServerRequest{
            Identifier: "esse",
            Name: "Melinda Orn",
            Scopes: []shared.ResourceServerScopeType{
                shared.ResourceServerScopeType{
                    ScopeDescription: "impedit",
                    ScopeName: "hic",
                },
                shared.ResourceServerScopeType{
                    ScopeDescription: "necessitatibus",
                    ScopeName: "asperiores",
                },
                shared.ResourceServerScopeType{
                    ScopeDescription: "ex",
                    ScopeName: "voluptas",
                },
                shared.ResourceServerScopeType{
                    ScopeDescription: "debitis",
                    ScopeName: "delectus",
                },
            },
            UserPoolID: "quae",
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.UpdateResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateResourceServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceServerResponse != nil {
        // handle response
    }
}
```

## UpdateUserAttributes

<p>Allows a user to update a specific attribute (one at a time).</p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUserAttributes(ctx, operations.UpdateUserAttributesRequest{
        UpdateUserAttributesRequest: shared.UpdateUserAttributesRequest{
            AccessToken: "impedit",
            ClientMetadata: map[string]string{
                "soluta": "repudiandae",
            },
            UserAttributes: []shared.AttributeType{
                shared.AttributeType{
                    Name: "Glenda Kling",
                    Value: sdk.String("neque"),
                },
                shared.AttributeType{
                    Name: "Casey Sporer",
                    Value: sdk.String("voluptatibus"),
                },
                shared.AttributeType{
                    Name: "Dr. Megan Spinka",
                    Value: sdk.String("architecto"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.UpdateUserAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserAttributesResponse != nil {
        // handle response
    }
}
```

## UpdateUserPool

<p>Updates the specified user pool with the specified attributes. You can get a list of the current user pool settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a>. If you don't provide a value for an attribute, it will be set to the default value. </p> <note> <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in.</p> <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon Simple Notification Service might place your account in the SMS sandbox. In <i> <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox mode</a> </i>, you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito Developer Guide</i>.</p> </note>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUserPool(ctx, operations.UpdateUserPoolRequest{
        UpdateUserPoolRequest: shared.UpdateUserPoolRequest{
            AccountRecoverySetting: &shared.AccountRecoverySettingType{
                RecoveryMechanisms: []shared.RecoveryOptionType{
                    shared.RecoveryOptionType{
                        Name: shared.RecoveryOptionNameTypeEnumVerifiedPhoneNumber,
                        Priority: 107617,
                    },
                    shared.RecoveryOptionType{
                        Name: shared.RecoveryOptionNameTypeEnumAdminOnly,
                        Priority: 568218,
                    },
                },
            },
            AdminCreateUserConfig: &shared.AdminCreateUserConfigType{
                AllowAdminCreateUserOnly: sdk.Bool(false),
                InviteMessageTemplate: &shared.MessageTemplateType{
                    EmailMessage: sdk.String("eum"),
                    EmailSubject: sdk.String("velit"),
                    SMSMessage: sdk.String("ut"),
                },
                UnusedAccountValidityDays: sdk.Int64(596433),
            },
            AutoVerifiedAttributes: []shared.VerifiedAttributeTypeEnum{
                shared.VerifiedAttributeTypeEnumPhoneNumber,
                shared.VerifiedAttributeTypeEnumEmail,
                shared.VerifiedAttributeTypeEnumEmail,
                shared.VerifiedAttributeTypeEnumEmail,
            },
            DeletionProtection: shared.DeletionProtectionTypeEnumInactive.ToPointer(),
            DeviceConfiguration: &shared.DeviceConfigurationType{
                ChallengeRequiredOnNewDevice: sdk.Bool(false),
                DeviceOnlyRememberedOnUserPrompt: sdk.Bool(false),
            },
            EmailConfiguration: &shared.EmailConfigurationType{
                ConfigurationSet: sdk.String("alias"),
                EmailSendingAccount: shared.EmailSendingAccountTypeEnumCognitoDefault.ToPointer(),
                From: sdk.String("itaque"),
                ReplyToEmailAddress: sdk.String("velit"),
                SourceArn: sdk.String("laborum"),
            },
            EmailVerificationMessage: sdk.String("non"),
            EmailVerificationSubject: sdk.String("dolor"),
            LambdaConfig: &shared.LambdaConfigType{
                CreateAuthChallenge: sdk.String("iusto"),
                CustomEmailSender: &shared.CustomEmailLambdaVersionConfigType{
                    LambdaArn: "sit",
                    LambdaVersion: shared.CustomEmailSenderLambdaVersionTypeEnumV10,
                },
                CustomMessage: sdk.String("doloremque"),
                CustomSMSSender: &shared.CustomSMSLambdaVersionConfigType{
                    LambdaArn: "consequatur",
                    LambdaVersion: shared.CustomSMSSenderLambdaVersionTypeEnumV10,
                },
                DefineAuthChallenge: sdk.String("officia"),
                KMSKeyID: sdk.String("recusandae"),
                PostAuthentication: sdk.String("ea"),
                PostConfirmation: sdk.String("quidem"),
                PreAuthentication: sdk.String("voluptas"),
                PreSignUp: sdk.String("facilis"),
                PreTokenGeneration: sdk.String("placeat"),
                UserMigration: sdk.String("perspiciatis"),
                VerifyAuthChallengeResponse: sdk.String("expedita"),
            },
            MfaConfiguration: shared.UserPoolMfaTypeEnumOn.ToPointer(),
            Policies: &shared.UserPoolPolicyType{
                PasswordPolicy: &shared.PasswordPolicyType{
                    MinimumLength: sdk.Int64(954334),
                    RequireLowercase: sdk.Bool(false),
                    RequireNumbers: sdk.Bool(false),
                    RequireSymbols: sdk.Bool(false),
                    RequireUppercase: sdk.Bool(false),
                    TemporaryPasswordValidityDays: sdk.Int64(455579),
                },
            },
            SmsAuthenticationMessage: sdk.String("ullam"),
            SmsConfiguration: &shared.SmsConfigurationType{
                ExternalID: sdk.String("unde"),
                SnsCallerArn: "necessitatibus",
                SnsRegion: sdk.String("animi"),
            },
            SmsVerificationMessage: sdk.String("impedit"),
            UserAttributeUpdateSettings: &shared.UserAttributeUpdateSettingsType{
                AttributesRequireVerificationBeforeUpdate: []shared.VerifiedAttributeTypeEnum{
                    shared.VerifiedAttributeTypeEnumPhoneNumber,
                    shared.VerifiedAttributeTypeEnumEmail,
                },
            },
            UserPoolAddOns: &shared.UserPoolAddOnsType{
                AdvancedSecurityMode: shared.AdvancedSecurityModeTypeEnumAudit,
            },
            UserPoolID: "esse",
            UserPoolTags: map[string]string{
                "veritatis": "vero",
                "consectetur": "vitae",
            },
            VerificationMessageTemplate: &shared.VerificationMessageTemplateType{
                DefaultEmailOption: shared.DefaultEmailOptionTypeEnumConfirmWithLink.ToPointer(),
                EmailMessage: sdk.String("dolorem"),
                EmailMessageByLink: sdk.String("ad"),
                EmailSubject: sdk.String("qui"),
                EmailSubjectByLink: sdk.String("iste"),
                SmsMessage: sdk.String("ex"),
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.UpdateUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserPoolResponse != nil {
        // handle response
    }
}
```

## UpdateUserPoolClient

<p>Updates the specified user pool app client with the specified attributes. You can get a list of the current user pool app client settings using <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html">DescribeUserPoolClient</a>.</p> <important> <p>If you don't provide a value for an attribute, it will be set to the default value.</p> </important> <p>You can also use this operation to enable token revocation for user pool clients. For more information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUserPoolClient(ctx, operations.UpdateUserPoolClientRequest{
        UpdateUserPoolClientRequest: shared.UpdateUserPoolClientRequest{
            AccessTokenValidity: sdk.Int64(545),
            AllowedOAuthFlows: []shared.OAuthFlowTypeEnum{
                shared.OAuthFlowTypeEnumImplicit,
            },
            AllowedOAuthFlowsUserPoolClient: sdk.Bool(false),
            AllowedOAuthScopes: []string{
                "quae",
            },
            AnalyticsConfiguration: &shared.AnalyticsConfigurationType{
                ApplicationArn: sdk.String("modi"),
                ApplicationID: sdk.String("neque"),
                ExternalID: sdk.String("exercitationem"),
                RoleArn: sdk.String("itaque"),
                UserDataShared: sdk.Bool(false),
            },
            AuthSessionValidity: sdk.Int64(88248),
            CallbackURLs: []string{
                "unde",
            },
            ClientID: "nulla",
            ClientName: sdk.String("distinctio"),
            DefaultRedirectURI: sdk.String("maxime"),
            EnablePropagateAdditionalUserContextData: sdk.Bool(false),
            EnableTokenRevocation: sdk.Bool(false),
            ExplicitAuthFlows: []shared.ExplicitAuthFlowsTypeEnum{
                shared.ExplicitAuthFlowsTypeEnumCustomAuthFlowOnly,
            },
            IDTokenValidity: sdk.Int64(342137),
            LogoutURLs: []string{
                "libero",
                "dicta",
                "id",
            },
            PreventUserExistenceErrors: shared.PreventUserExistenceErrorTypesEnumEnabled.ToPointer(),
            ReadAttributes: []string{
                "officia",
                "quos",
                "placeat",
                "sit",
            },
            RefreshTokenValidity: sdk.Int64(479385),
            SupportedIdentityProviders: []string{
                "voluptates",
            },
            TokenValidityUnits: &shared.TokenValidityUnitsType{
                AccessToken: shared.TimeUnitsTypeEnumSeconds.ToPointer(),
                IDToken: shared.TimeUnitsTypeEnumSeconds.ToPointer(),
                RefreshToken: shared.TimeUnitsTypeEnumHours.ToPointer(),
            },
            UserPoolID: "dolore",
            WriteAttributes: []string{
                "distinctio",
                "voluptatem",
                "autem",
                "esse",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.UpdateUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPoolClient,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserPoolClientResponse != nil {
        // handle response
    }
}
```

## UpdateUserPoolDomain

<p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool.</p> <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p> <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and sign-in pages for your application. When you set up a custom domain, you provide a certificate that you manage with Certificate Manager (ACM). When necessary, you can use this operation to change the certificate that you applied to your custom domain.</p> <p>Usually, this is unnecessary following routine certificate renewal with ACM. When you renew your existing certificate in ACM, the ARN for your certificate remains the same, and your custom domain uses the new certificate automatically.</p> <p>However, if you replace your existing certificate with a new one, ACM gives the new certificate a new ARN. To apply the new certificate to your custom domain, you must provide this ARN to Amazon Cognito.</p> <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as the Amazon Web Services Region.</p> <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateUserPoolDomain(ctx, operations.UpdateUserPoolDomainRequest{
        UpdateUserPoolDomainRequest: shared.UpdateUserPoolDomainRequest{
            CustomDomainConfig: shared.CustomDomainConfigType{
                CertificateArn: "provident",
            },
            Domain: "accusamus",
            UserPoolID: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.UpdateUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceUpdateUserPoolDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserPoolDomainResponse != nil {
        // handle response
    }
}
```

## VerifySoftwareToken

Use this API to register a user's entered time-based one-time password (TOTP) code and mark the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.VerifySoftwareToken(ctx, operations.VerifySoftwareTokenRequest{
        VerifySoftwareTokenRequest: shared.VerifySoftwareTokenRequest{
            AccessToken: sdk.String("corporis"),
            FriendlyDeviceName: sdk.String("officiis"),
            Session: sdk.String("voluptatibus"),
            UserCode: "cum",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("quia"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.VerifySoftwareTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceVerifySoftwareToken,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifySoftwareTokenResponse != nil {
        // handle response
    }
}
```

## VerifyUserAttribute

<p>Verifies the specified user attributes in the user pool.</p> <p> If your user pool requires verification before Amazon Cognito updates the attribute value, VerifyUserAttribute updates the affected attribute to its pending value. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html"> UserAttributeUpdateSettingsType</a>. </p>

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.VerifyUserAttribute(ctx, operations.VerifyUserAttributeRequest{
        VerifyUserAttributeRequest: shared.VerifyUserAttributeRequest{
            AccessToken: "expedita",
            AttributeName: "officiis",
            Code: "eos",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.VerifyUserAttributeXAmzTargetEnumAwsCognitoIdentityProviderServiceVerifyUserAttribute,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyUserAttributeResponse != nil {
        // handle response
    }
}
```
