import { SpeakeasyBase } from "../../../internal/utils";
import { TransportDescriptor } from "./transportdescriptor";
export declare class TransportDependency extends SpeakeasyBase {
    /**
     * Set of labels that allow to define groups of transport bindings. The mechanism of the grouping is defined below this table.
     */
    labels: string[];
    /**
     * Information about the serializers in this transport binding, as defined in the SerializerTypes type in ETSI GS MEC 011 [i.4]. Support for at least one of the entries is required in conjunction with the transport.
     */
    serializers: string[];
    transport: TransportDescriptor;
}
