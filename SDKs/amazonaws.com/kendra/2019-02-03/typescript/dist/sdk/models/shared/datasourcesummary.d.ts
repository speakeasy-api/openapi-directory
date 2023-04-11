import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceStatusEnum } from "./datasourcestatusenum";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
/**
 * Summary information for a Amazon Kendra data source.
 */
export declare class DataSourceSummary extends SpeakeasyBase {
    createdAt?: Date;
    id?: string;
    languageCode?: string;
    name?: string;
    status?: DataSourceStatusEnum;
    type?: DataSourceTypeEnum;
    updatedAt?: Date;
}
