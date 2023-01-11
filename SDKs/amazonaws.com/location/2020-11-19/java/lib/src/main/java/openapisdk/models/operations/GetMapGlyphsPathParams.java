package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapGlyphsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FontStack")
    public String fontStack;
    public GetMapGlyphsPathParams withFontStack(String fontStack) {
        this.fontStack = fontStack;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FontUnicodeRange")
    public String fontUnicodeRange;
    public GetMapGlyphsPathParams withFontUnicodeRange(String fontUnicodeRange) {
        this.fontUnicodeRange = fontUnicodeRange;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MapName")
    public String mapName;
    public GetMapGlyphsPathParams withMapName(String mapName) {
        this.mapName = mapName;
        return this;
    }
}