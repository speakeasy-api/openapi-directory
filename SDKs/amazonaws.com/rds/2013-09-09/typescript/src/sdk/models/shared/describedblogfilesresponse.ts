import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribeDbLogFilesList } from "./describedblogfileslist";



export class DescribeDbLogFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DescribeDbLogFilesList })
  describeDBLogFiles?: DescribeDbLogFilesList[];

  @SpeakeasyMetadata()
  marker?: string;
}
