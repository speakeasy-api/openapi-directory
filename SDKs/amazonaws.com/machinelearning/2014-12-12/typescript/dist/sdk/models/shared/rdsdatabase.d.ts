import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The database details of an Amazon RDS database.
 */
export declare class RDSDatabase extends SpeakeasyBase {
    /**
     * The name of a database hosted on an RDS DB instance.
     */
    databaseName: string;
    instanceIdentifier: string;
}
