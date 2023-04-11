import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
import { RDSMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
/**
 * Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.
 */
export declare class GetDataSourceOutput extends SpeakeasyBase {
    computeStatistics?: boolean;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    dataLocationS3?: string;
    dataRearrangement?: string;
    dataSizeInBytes?: number;
    dataSourceId?: string;
    dataSourceSchema?: string;
    finishedAt?: Date;
    lastUpdatedAt?: Date;
    logUri?: string;
    message?: string;
    name?: string;
    numberOfFiles?: number;
    /**
     * The datasource details that are specific to Amazon RDS.
     */
    rdsMetadata?: RDSMetadata;
    /**
     * Describes the <code>DataSource</code> details specific to Amazon Redshift.
     */
    redshiftMetadata?: RedshiftMetadata;
    /**
     * The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename.
     */
    roleARN?: string;
    startedAt?: Date;
    status?: EntityStatusEnum;
}
