import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information that defines an OpenSearch endpoint.
 */
export declare class ElasticsearchSettings extends SpeakeasyBase {
    endpointUri: string;
    errorRetryDuration?: number;
    fullLoadErrorPercentage?: number;
    serviceAccessRoleArn: string;
    useNewMappingType?: boolean;
}
