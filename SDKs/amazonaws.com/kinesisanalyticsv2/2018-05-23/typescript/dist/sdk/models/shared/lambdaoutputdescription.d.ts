import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination.
 */
export declare class LambdaOutputDescription extends SpeakeasyBase {
    resourceARN: string;
    roleARN?: string;
}
