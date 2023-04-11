import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogTarget } from "./catalogtarget";
import { DeltaTarget } from "./deltatarget";
import { DynamoDBTarget } from "./dynamodbtarget";
import { JdbcTarget } from "./jdbctarget";
import { MongoDBTarget } from "./mongodbtarget";
import { S3Target } from "./s3target";
/**
 * Specifies data stores to crawl.
 */
export declare class CrawlerTargets extends SpeakeasyBase {
    catalogTargets?: CatalogTarget[];
    deltaTargets?: DeltaTarget[];
    dynamoDBTargets?: DynamoDBTarget[];
    jdbcTargets?: JdbcTarget[];
    mongoDBTargets?: MongoDBTarget[];
    s3Targets?: S3Target[];
}
