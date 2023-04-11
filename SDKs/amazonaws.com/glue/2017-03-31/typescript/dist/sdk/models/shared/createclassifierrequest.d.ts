import { SpeakeasyBase } from "../../../internal/utils";
import { CreateCsvClassifierRequest } from "./createcsvclassifierrequest";
import { CreateGrokClassifierRequest } from "./creategrokclassifierrequest";
import { CreateJsonClassifierRequest } from "./createjsonclassifierrequest";
import { CreateXMLClassifierRequest } from "./createxmlclassifierrequest";
export declare class CreateClassifierRequest extends SpeakeasyBase {
    csvClassifier?: CreateCsvClassifierRequest;
    grokClassifier?: CreateGrokClassifierRequest;
    jsonClassifier?: CreateJsonClassifierRequest;
    xmlClassifier?: CreateXMLClassifierRequest;
}
