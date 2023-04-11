import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { StatusEnum } from "./statusenum";
/**
 * Success
 */
export declare class DescribeProvisioningArtifactOutput extends SpeakeasyBase {
    info?: Record<string, string>;
    provisioningArtifactDetail?: ProvisioningArtifactDetail;
    status?: StatusEnum;
}
