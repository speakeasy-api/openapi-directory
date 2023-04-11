import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p> CellInput object contains the data needed to create or update cells in a table. </p> <note> <p> CellInput object has only a facts field or a fact field, but not both. A 400 bad request will be thrown if both fact and facts field are present. </p> </note>
 */
export declare class CellInput extends SpeakeasyBase {
    fact?: string;
    facts?: string[];
}
