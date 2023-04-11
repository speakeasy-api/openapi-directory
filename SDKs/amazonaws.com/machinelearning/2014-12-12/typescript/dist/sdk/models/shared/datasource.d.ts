import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
import { RDSMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
/**
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
 */
export declare class DataSource extends SpeakeasyBase {
    computeStatistics?: boolean;
    /**
     * Long integer type that is a 64-bit signed number.
     */
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    dataLocationS3?: string;
    dataRearrangement?: string;
    dataSizeInBytes?: number;
    dataSourceId?: string;
    /**
     * A timestamp represented in epoch time.
     */
    finishedAt?: Date;
    lastUpdatedAt?: Date;
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
    /**
     * A timestamp represented in epoch time.
     */
    startedAt?: Date;
    status?: EntityStatusEnum;
}
