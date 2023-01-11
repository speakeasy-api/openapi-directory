import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkOriginConfiguration } from "./networkoriginconfiguration";
import { S3PublicAccessBlockConfiguration } from "./s3publicaccessblockconfiguration";
export declare class S3AccessPointConfiguration extends SpeakeasyBase {
    accessPointPolicy?: string;
    networkOrigin?: NetworkOriginConfiguration;
    publicAccessBlock?: S3PublicAccessBlockConfiguration;
}
