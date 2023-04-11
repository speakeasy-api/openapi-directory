import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartExportTaskMessage extends SpeakeasyBase {
    exportOnly?: string[];
    exportTaskIdentifier: string;
    iamRoleArn: string;
    kmsKeyId: string;
    s3BucketName: string;
    s3Prefix?: string;
    sourceArn: string;
}
