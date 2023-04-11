import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceDataSourceDescription } from "./referencedatasourcedescription";
/**
 * Success
 */
export declare class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    applicationARN?: string;
    applicationVersionId?: number;
    referenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}
