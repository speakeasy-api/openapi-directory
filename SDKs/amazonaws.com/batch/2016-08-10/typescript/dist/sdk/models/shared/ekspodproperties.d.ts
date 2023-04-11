import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainer } from "./ekscontainer";
import { EksMetadata } from "./eksmetadata";
import { EksVolume } from "./eksvolume";
/**
 * The properties for the pod.
 */
export declare class EksPodProperties extends SpeakeasyBase {
    containers?: EksContainer[];
    dnsPolicy?: string;
    hostNetwork?: boolean;
    metadata?: EksMetadata;
    serviceAccountName?: string;
    volumes?: EksVolume[];
}
