import { SpeakeasyBase } from "../../../internal/utils";
import { RDSDatabase } from "./rdsdatabase";
import { RDSDatabaseCredentials } from "./rdsdatabasecredentials";
/**
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
 */
export declare class RDSDataSpec extends SpeakeasyBase {
    dataRearrangement?: string;
    dataSchema?: string;
    dataSchemaUri?: string;
    databaseCredentials: RDSDatabaseCredentials;
    databaseInformation: RDSDatabase;
    resourceRole: string;
    s3StagingLocation: string;
    securityGroupIds: string[];
    selectSqlQuery: string;
    serviceRole: string;
    subnetId: string;
}
