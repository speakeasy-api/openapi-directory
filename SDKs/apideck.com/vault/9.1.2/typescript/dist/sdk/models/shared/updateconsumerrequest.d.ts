import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
export declare class UpdateConsumerRequest extends SpeakeasyBase {
    /**
     * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
     */
    metadata?: ConsumerMetadata;
}
