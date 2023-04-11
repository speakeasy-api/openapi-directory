import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transport type that does not do anything
 */
export declare class NullTransport extends SpeakeasyBase {
    /**
     * A dummy value
     */
    dummy?: string;
    /**
     * The discriminator
     */
    type: string;
}
