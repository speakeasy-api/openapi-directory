import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionLoadFrequencyEnum } from "./partitionloadfrequencyenum";
/**
 * Describes integration options for Amazon Athena.
 */
export declare class GetFlowLogsIntegrationTemplateRequestIntegrateServicesAthenaIntegrations extends SpeakeasyBase {
    integrationResultS3DestinationArn: string;
    partitionEndDate?: Date;
    partitionLoadFrequency: PartitionLoadFrequencyEnum;
    partitionStartDate?: Date;
}
/**
 * Information about the service integration.
 */
export declare class GetFlowLogsIntegrationTemplateRequestIntegrateServices extends SpeakeasyBase {
    athenaIntegrations?: GetFlowLogsIntegrationTemplateRequestIntegrateServicesAthenaIntegrations[];
}
export declare class GetFlowLogsIntegrationTemplateRequest extends SpeakeasyBase {
    configDeliveryS3DestinationArn: string;
    dryRun?: boolean;
    flowLogId: string;
    integrateServices: GetFlowLogsIntegrationTemplateRequestIntegrateServices;
}
