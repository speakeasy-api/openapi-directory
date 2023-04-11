import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeFilter } from "./attributefilter";
import { DocumentRelevanceConfiguration } from "./documentrelevanceconfiguration";
import { Facet } from "./facet";
import { QueryResultTypeEnum } from "./queryresulttypeenum";
import { SortingConfiguration } from "./sortingconfiguration";
import { SpellCorrectionConfiguration } from "./spellcorrectionconfiguration";
import { UserContext } from "./usercontext";
export declare class QueryRequest extends SpeakeasyBase {
    attributeFilter?: AttributeFilter;
    documentRelevanceOverrideConfigurations?: DocumentRelevanceConfiguration[];
    facets?: Facet[];
    indexId: string;
    pageNumber?: number;
    pageSize?: number;
    queryResultTypeFilter?: QueryResultTypeEnum;
    queryText?: string;
    requestedDocumentAttributes?: string[];
    sortingConfiguration?: SortingConfiguration;
    spellCorrectionConfiguration?: SpellCorrectionConfiguration;
    userContext?: UserContext;
    visitorId?: string;
}
