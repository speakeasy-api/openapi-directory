import { SpeakeasyBase } from "../../../internal/utils";
import { KernelGatewayImageConfig } from "./kernelgatewayimageconfig";
/**
 * Success
 */
export declare class DescribeAppImageConfigResponse extends SpeakeasyBase {
    appImageConfigArn?: string;
    appImageConfigName?: string;
    creationTime?: Date;
    kernelGatewayImageConfig?: KernelGatewayImageConfig;
    lastModifiedTime?: Date;
}
