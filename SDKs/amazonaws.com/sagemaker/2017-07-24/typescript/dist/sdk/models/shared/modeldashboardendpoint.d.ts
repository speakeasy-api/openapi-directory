import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointStatusEnum } from "./endpointstatusenum";
/**
 * An endpoint that hosts a model displayed in the Amazon SageMaker Model Dashboard.
 */
export declare class ModelDashboardEndpoint extends SpeakeasyBase {
    creationTime: Date;
    endpointArn: string;
    endpointName: string;
    endpointStatus: EndpointStatusEnum;
    lastModifiedTime: Date;
}
