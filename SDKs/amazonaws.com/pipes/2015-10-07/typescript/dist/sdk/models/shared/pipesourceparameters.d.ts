import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { PipeSourceActiveMQBrokerParameters } from "./pipesourceactivemqbrokerparameters";
import { PipeSourceDynamoDBStreamParameters } from "./pipesourcedynamodbstreamparameters";
import { PipeSourceKinesisStreamParameters } from "./pipesourcekinesisstreamparameters";
import { PipeSourceManagedStreamingKafkaParameters } from "./pipesourcemanagedstreamingkafkaparameters";
import { PipeSourceRabbitMQBrokerParameters } from "./pipesourcerabbitmqbrokerparameters";
import { PipeSourceSelfManagedKafkaParameters } from "./pipesourceselfmanagedkafkaparameters";
import { PipeSourceSqsQueueParameters } from "./pipesourcesqsqueueparameters";
/**
 * The parameters required to set up a source for your pipe.
 */
export declare class PipeSourceParameters extends SpeakeasyBase {
    activeMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;
    dynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;
    filterCriteria?: FilterCriteria;
    kinesisStreamParameters?: PipeSourceKinesisStreamParameters;
    managedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;
    rabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;
    selfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
    sqsQueueParameters?: PipeSourceSqsQueueParameters;
}
