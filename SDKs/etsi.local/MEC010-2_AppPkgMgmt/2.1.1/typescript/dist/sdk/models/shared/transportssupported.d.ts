import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";
/**
 * 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
 */
export declare class TransportsSupported extends SpeakeasyBase {
    /**
     * 'Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 '
     */
    serializers?: string[];
    transport?: TransportDescriptor;
}
