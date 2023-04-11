import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmVersionInfo } from "./algorithmversioninfo";
/**
 * Information of all available algorithms
 */
export declare class AlgorithmVersionInfoList extends SpeakeasyBase {
    /**
     * List of file key algorithms
     */
    fileKeyAlgorithms: AlgorithmVersionInfo[];
    /**
     * List of key pair algorithms
     */
    keyPairAlgorithms: AlgorithmVersionInfo[];
}
