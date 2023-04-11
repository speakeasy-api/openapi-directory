import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceLine } from "./referenceline";
export declare class ReferenceLines extends SpeakeasyBase {
    /**
     * The file's name in where the code reference has been found. (Appears on the ConfigCat Dashboard)
     */
    file: string;
    /**
     * The file's url. (Used to point to the file on the repository's website)
     */
    fileUrl?: string;
    /**
     * The lines after the actual reference line.
     */
    postLines?: ReferenceLine[];
    /**
     * The lines before the actual reference line.
     */
    preLines?: ReferenceLine[];
    referenceLine: ReferenceLine;
}
