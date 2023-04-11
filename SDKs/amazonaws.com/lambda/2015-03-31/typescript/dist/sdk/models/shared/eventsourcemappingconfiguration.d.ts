import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonManagedKafkaEventSourceConfig } from "./amazonmanagedkafkaeventsourceconfig";
import { DestinationConfig } from "./destinationconfig";
import { DocumentDBEventSourceConfig } from "./documentdbeventsourceconfig";
import { EventSourcePositionEnum } from "./eventsourcepositionenum";
import { FilterCriteria } from "./filtercriteria";
import { FunctionResponseTypeEnum } from "./functionresponsetypeenum";
import { ScalingConfig } from "./scalingconfig";
import { SelfManagedEventSource } from "./selfmanagedeventsource";
import { SelfManagedKafkaEventSourceConfig } from "./selfmanagedkafkaeventsourceconfig";
import { SourceAccessConfiguration } from "./sourceaccessconfiguration";
/**
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
 */
export declare class EventSourceMappingConfiguration extends SpeakeasyBase {
    amazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
    batchSize?: number;
    bisectBatchOnFunctionError?: boolean;
    destinationConfig?: DestinationConfig;
    documentDBEventSourceConfig?: DocumentDBEventSourceConfig;
    eventSourceArn?: string;
    filterCriteria?: FilterCriteria;
    functionArn?: string;
    functionResponseTypes?: FunctionResponseTypeEnum[];
    lastModified?: Date;
    lastProcessingResult?: string;
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    parallelizationFactor?: number;
    queues?: string[];
    scalingConfig?: ScalingConfig;
    selfManagedEventSource?: SelfManagedEventSource;
    selfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
    sourceAccessConfigurations?: SourceAccessConfiguration[];
    startingPosition?: EventSourcePositionEnum;
    startingPositionTimestamp?: Date;
    state?: string;
    stateTransitionReason?: string;
    topics?: string[];
    tumblingWindowInSeconds?: number;
    uuid?: string;
}
