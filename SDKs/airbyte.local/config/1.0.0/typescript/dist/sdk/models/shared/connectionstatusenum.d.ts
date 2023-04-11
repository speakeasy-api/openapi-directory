/**
 * Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.
 */
export declare enum ConnectionStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Deprecated = "deprecated"
}
