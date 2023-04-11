import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon DynamoDB table to crawl.
 */
export declare class DynamoDBTarget extends SpeakeasyBase {
    path?: string;
    scanAll?: boolean;
    scanRate?: number;
}
