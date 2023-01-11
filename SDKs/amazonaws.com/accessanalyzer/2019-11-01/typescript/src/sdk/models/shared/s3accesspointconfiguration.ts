import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkOriginConfiguration } from "./networkoriginconfiguration";
import { S3PublicAccessBlockConfiguration } from "./s3publicaccessblockconfiguration";



export class S3AccessPointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPointPolicy" })
  accessPointPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=networkOrigin" })
  networkOrigin?: NetworkOriginConfiguration;

  @SpeakeasyMetadata({ data: "json, name=publicAccessBlock" })
  publicAccessBlock?: S3PublicAccessBlockConfiguration;
}
