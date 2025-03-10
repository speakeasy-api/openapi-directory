/**
 * 'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'
 */
export declare enum ActionEnum {
    Drop = "DROP",
    ForwardDecapsulated = "FORWARD_DECAPSULATED",
    ForwardAsIs = "FORWARD_AS_IS",
    Passthrough = "PASSTHROUGH",
    DuplicatedDecapsulated = "DUPLICATED_DECAPSULATED",
    DuplicateAsIs = "DUPLICATE_AS_IS"
}
