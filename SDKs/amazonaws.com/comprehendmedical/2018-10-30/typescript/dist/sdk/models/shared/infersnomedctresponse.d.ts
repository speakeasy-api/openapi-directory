import { SpeakeasyBase } from "../../../internal/utils";
import { Characters } from "./characters";
import { SNOMEDCTDetails } from "./snomedctdetails";
import { SNOMEDCTEntity } from "./snomedctentity";
/**
 * Success
 */
export declare class InferSNOMEDCTResponse extends SpeakeasyBase {
    characters?: Characters;
    entities: SNOMEDCTEntity[];
    modelVersion?: string;
    paginationToken?: string;
    snomedctDetails?: SNOMEDCTDetails;
}
