import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainerDetail } from "./ekscontainerdetail";
import { EksVolume } from "./eksvolume";
/**
 * The details for the pod.
 */
export declare class EksPodPropertiesDetail extends SpeakeasyBase {
    containers?: EksContainerDetail[];
    dnsPolicy?: string;
    hostNetwork?: boolean;
    nodeName?: string;
    podName?: string;
    serviceAccountName?: string;
    volumes?: EksVolume[];
}
