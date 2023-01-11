package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoapNoteCustomReportSoapNoteCustomReport
 * Order of templates
**/
public class SoapNoteCustomReportSoapNoteCustomReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_complete_note")
    public Long onCompleteNote;
    public SoapNoteCustomReportSoapNoteCustomReport withOnCompleteNote(Long onCompleteNote) {
        this.onCompleteNote = onCompleteNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("on_ipad")
    public Long onIpad;
    public SoapNoteCustomReportSoapNoteCustomReport withOnIpad(Long onIpad) {
        this.onIpad = onIpad;
        return this;
    }
}