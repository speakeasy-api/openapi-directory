import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCredential } from "./apicredential";



export class ApiCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: ApiCredential })
  credentials?: ApiCredential[];
}
