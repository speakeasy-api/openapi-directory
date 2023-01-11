package openapisdk.models.operations;



public class EnterpriseAdminGetAnnouncementResponse {
    public String contentType;
    public EnterpriseAdminGetAnnouncementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetAnnouncementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Announcement announcement;
    public EnterpriseAdminGetAnnouncementResponse withAnnouncement(openapisdk.models.shared.Announcement announcement) {
        this.announcement = announcement;
        return this;
    }
}