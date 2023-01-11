import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendAuthAppleProviderConfig
/** 
 * Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
**/
export class BackendAuthAppleProviderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TeamId" })
  teamId?: Record<string, any>;
}
