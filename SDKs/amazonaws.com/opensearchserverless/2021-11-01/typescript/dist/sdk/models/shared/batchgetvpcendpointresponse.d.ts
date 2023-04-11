import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointDetail } from "./vpcendpointdetail";
import { VpcEndpointErrorDetail } from "./vpcendpointerrordetail";
/**
 * Success
 */
export declare class BatchGetVpcEndpointResponse extends SpeakeasyBase {
    vpcEndpointDetails?: VpcEndpointDetail[];
    vpcEndpointErrorDetails?: VpcEndpointErrorDetail[];
}
