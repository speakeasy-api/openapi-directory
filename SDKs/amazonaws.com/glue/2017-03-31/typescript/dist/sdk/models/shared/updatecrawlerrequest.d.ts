import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerTargets } from "./crawlertargets";
import { LakeFormationConfiguration } from "./lakeformationconfiguration";
import { LineageConfiguration } from "./lineageconfiguration";
import { RecrawlPolicy } from "./recrawlpolicy";
import { SchemaChangePolicy } from "./schemachangepolicy";
export declare class UpdateCrawlerRequest extends SpeakeasyBase {
    classifiers?: string[];
    configuration?: string;
    crawlerSecurityConfiguration?: string;
    databaseName?: string;
    description?: string;
    lakeFormationConfiguration?: LakeFormationConfiguration;
    lineageConfiguration?: LineageConfiguration;
    name: string;
    recrawlPolicy?: RecrawlPolicy;
    role?: string;
    schedule?: string;
    schemaChangePolicy?: SchemaChangePolicy;
    tablePrefix?: string;
    targets?: CrawlerTargets;
}
