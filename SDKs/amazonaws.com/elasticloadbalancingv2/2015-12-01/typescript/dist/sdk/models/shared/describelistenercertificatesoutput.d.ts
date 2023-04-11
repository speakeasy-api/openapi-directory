import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
/**
 * Success
 */
export declare class DescribeListenerCertificatesOutput extends SpeakeasyBase {
    certificates?: Certificate[];
    nextMarker?: string;
}
