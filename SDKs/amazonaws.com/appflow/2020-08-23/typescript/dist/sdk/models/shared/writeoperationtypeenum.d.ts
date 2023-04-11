/**
 *  The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation.
 */
export declare enum WriteOperationTypeEnum {
    Insert = "INSERT",
    Upsert = "UPSERT",
    Update = "UPDATE",
    Delete = "DELETE"
}
