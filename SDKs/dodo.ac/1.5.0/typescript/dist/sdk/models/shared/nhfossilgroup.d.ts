import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object describing the fossil group.
 */
export declare class NHFossilGroup extends SpeakeasyBase {
    /**
     * A description of the fossil group.
     */
    description?: string;
    /**
     * The name of the fossil group.
     */
    name?: string;
    /**
     * The room where the fossil group can be found in the museum's fossil section.
     */
    room?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
