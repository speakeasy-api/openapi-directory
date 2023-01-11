import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlDatamodelField } from "./crawldatamodelfield";
import { CrawlDatamodelGroup } from "./crawldatamodelgroup";
export declare class CrawlDatamodel extends SpeakeasyBase {
    fields: CrawlDatamodelField[];
    groups: CrawlDatamodelGroup[];
}
