import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPackageManagerServletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPackageManagerServlet404TextHTMLString?: string;

  @SpeakeasyMetadata()
  getPackageManagerServlet405TextHTMLString?: string;
}
