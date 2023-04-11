import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetEntityRecognizerAnnotations } from "./datasetentityrecognizerannotations";
import { DatasetEntityRecognizerDocuments } from "./datasetentityrecognizerdocuments";
import { DatasetEntityRecognizerEntityList } from "./datasetentityrecognizerentitylist";
/**
 * Specifies the format and location of the input data. You must provide either the <code>Annotations</code> parameter or the <code>EntityList</code> parameter.
 */
export declare class DatasetEntityRecognizerInputDataConfig extends SpeakeasyBase {
    annotations?: DatasetEntityRecognizerAnnotations;
    documents: DatasetEntityRecognizerDocuments;
    entityList?: DatasetEntityRecognizerEntityList;
}
