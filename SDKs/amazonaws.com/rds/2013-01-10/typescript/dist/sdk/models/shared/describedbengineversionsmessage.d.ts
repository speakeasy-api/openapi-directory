import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeDBEngineVersionsMessage extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    listSupportedCharacterSets?: boolean;
    marker?: string;
    maxRecords?: number;
}
