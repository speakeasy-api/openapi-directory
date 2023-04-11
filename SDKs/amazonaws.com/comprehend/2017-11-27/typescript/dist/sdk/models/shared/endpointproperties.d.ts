import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * Specifies information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
 */
export declare class EndpointProperties extends SpeakeasyBase {
    creationTime?: Date;
    currentInferenceUnits?: number;
    dataAccessRoleArn?: string;
    desiredDataAccessRoleArn?: string;
    desiredInferenceUnits?: number;
    desiredModelArn?: string;
    endpointArn?: string;
    flywheelArn?: string;
    lastModifiedTime?: Date;
    message?: string;
    modelArn?: string;
    status?: EndpointStatusEnum;
}
